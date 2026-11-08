#!/usr/bin/env bash
# 针对线上已部署站点复测（外部 HTTPS，走代理正常）。
set -u
cd "$(dirname "$0")/.."
BASE="https://www.christopherbu.com"
DIR="sprint-kit/audit/lighthouse-live"
mkdir -p "$DIR"
PATHS="/rtw/SS14/ /rtw/AW15/ /rtw/CC16/ /products/raw-silk/ /products/greige-fabric/ /products/satin/ /products/jacquard-luo/ /products/georgette/ /products/habotai/ /products/stretch-silk/ /products/blended-silk/ /products/dupioni/ /blog/"
for p in $PATHS; do
  slug=$(echo "$p" | sed 's#^/##; s#/$##; s#/#__#g')
  outf="$DIR/$slug.json"
  [ -f "$outf" ] && { echo "skip $p"; continue; }
  echo "audit $p"
  npx lighthouse "$BASE$p" --quiet \
    --chrome-flags="--headless=new --no-sandbox --disable-gpu" \
    --only-categories=performance,accessibility,best-practices,seo \
    --form-factor=mobile --output=json --output-path="$outf" >/dev/null 2>&1
done
echo "=== 成绩 ==="
python3 - "$DIR" <<'PY'
import json,glob,os
for f in sorted(glob.glob(d+"/"+"*.json")) if False else sorted(glob.glob(os.path.join(d,"*.json"))):
    try:
        r=json.load(open(f))
        if r.get("runtimeError"):
            print(f"{os.path.basename(f)[:-5]:32s} ERROR {r['runtimeError'].get('code')}"); continue
        cat=r["categories"]
        perf=round(cat["performance"]["score"]*100)
        a11y=round(cat["accessibility"]["score"]*100)
        bp=round(cat["best-practices"]["score"]*100)
        seo=round(cat["seo"]["score"]*100)
        name=os.path.basename(f)[:-5].replace("__","/")
        print(f"{name:32s} perf={perf:3d} a11y={a11y:3d} bp={bp:3d} seo={seo:3d}")
    except Exception as e:
        print(f, e)
PY