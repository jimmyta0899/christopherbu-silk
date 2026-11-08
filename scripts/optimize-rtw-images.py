#!/usr/bin/env python3
"""批量把 public/rtw 下的 JPG/JPEG 转为 WebP（限宽 1200、质量 82），原图保留。
同时生成 src/lib/rtw-dimensions.ts 供 SeasonViewer 补 width/height，消掉 unsized-images。
"""
import os, re, json
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RTW = os.path.join(ROOT, "public", "rtw")
MAX_W = 1200
QUALITY = 82

def iter_jpg(root):
    for dirpath, _, files in os.walk(root):
        for f in files:
            if re.match(r".*\.(jpg|jpeg|JPG|JPEG)$", f):
                yield os.path.join(dirpath, f)

def main():
    converted = 0
    skipped = 0
    dims = {}
    for path in iter_jpg(RTW):
        webp = os.path.splitext(path)[0] + ".webp"
        if os.path.exists(webp):
            skipped += 1
            try:
                with Image.open(webp) as im:
                    w, h = im.size
                rel = os.path.relpath(webp, ROOT).replace("\\", "/").replace("public/", "/", 1)
                dims[rel] = [w, h]
            except Exception:
                pass
            continue
        try:
            with Image.open(path) as im:
                im = im.convert("RGB")
                w, h = im.size
                if w > MAX_W:
                    h = round(h * MAX_W / w)
                    w = MAX_W
                    im = im.resize((w, h), Image.LANCZOS)
                im.save(webp, "WEBP", quality=QUALITY, method=4)
                rel = os.path.relpath(webp, ROOT).replace("\\", "/").replace("public/", "/", 1)
                dims[rel] = [w, h]
                converted += 1
        except Exception as e:
            print("FAIL", path, e)
    # 写 manifest（key 形如 /rtw/2020SS/2020SS01.webp）
    out_ts = os.path.join(ROOT, "src", "lib", "rtw-dimensions.ts")
    lines = ["// 自动生成：rtw 图片 WebP 尺寸清单，供 SeasonViewer 补 width/height。",
             "// 由 scripts/optimize-rtw-images.py 生成，勿手改。",
             "export const rtwDimensions: Record<string, [number, number]> = {"]
    for k in sorted(dims):
        lines.append(f'  "{k}": [{dims[k][0]}, {dims[k][1]}],')
    lines.append("};")
    lines.append("")
    with open(out_ts, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"converted={converted} skipped={skipped} manifest_entries={len(dims)}")
    print("manifest ->", out_ts)

if __name__ == "__main__":
    main()
