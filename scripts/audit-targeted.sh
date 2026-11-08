#!/usr/bin/env bash
# 定向复测：针对之前 Perf<90 的页面 + 全部产品页，确认是否拉进 90+。
set -u
cd "$(dirname "$0")/.."
unset HTTP_PROXY HTTPS_PROXY http_proxy https_proxy ALL_PROXY all_proxy
export NO_PROXY="127.0.0.1,localhost"
export no_proxy="127.0.0.1,localhost"
BASE="http://127.0.0.1:8910"
DIR="sprint-kit/audit/lighthouse-recheck"
mkdir -p "$DIR"
PATHS="/rtw/SS14/ /rtw/AW15/ /rtw/CC16/ /products/raw-silk/ /products/greige-fabric/ /products/satin/ /products/jacquard-luo/ /products/georgette/ /products/habotai/ /products/stretch-silk/ /products/blended-silk/ /products/dupioni/ /blog/"
for p in $PATHS; do
  slug=$(echo "$p" | sed 's#^/##; s#/$##; s#/#__#g')
  outf="$DIR/$slug.json"
  [ -f "$outf" ] && { echo "skip $p"; continue; }
  echo "audit $p"
  npx lighthouse "$BASE$p" --quiet \
    --chrome-flags="--headless=new --no-sandbox --disable-gpu --no-proxy-server --proxy-bypass-list=127.0.0.1;localhost" \
    --only-categories=performance,accessibility,best-practices,seo \
    --form-factor=mobile --output=json --output-path="$outf" >/dev/null 2>&1
done
echo "=== 成绩 ==="
python3 - "$DIR" <<'PY'
import json,glob,sys,os
d=sys.argv[1]
for f in sorted(glob.glob(d+"/*.json")):
    try:
        r=json.load(open(f))
        cat=r["categories"]
        perf=cat["performance"]["score"]*100
        a11y=cat["accessibility"]["score"]*100
        bp=cat["best-practices"]["score"]*100
        seo=cat["seo"]["score"]*100
        name=os.path.basename(f)[:-5].replace("__","/")
        print(f"{name:32s} perf={perf:5.0f} a11y={a11y:5.0f} bp={bp:5.0f} seo={seo:5.0f}")
    except Exception as e:
        print(f, e)
PY