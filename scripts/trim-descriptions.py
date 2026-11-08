#!/usr/bin/env python3
# 把 8 条 157-169 字符的 description 再压到 <=155。
import os, re
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
T = [
 ("src/lib/products.ts",
  "GOTS-certified organic mulberry silk: raw, greige yarn or fabric, undyed or dyed to order. Verifiable organic status for compliance-driven buyers. B2B Yizhou.",
  "GOTS-certified organic mulberry silk: raw, greige yarn or fabric, undyed or dyed to order. Verifiable organic status for compliance buyers. B2B Yizhou."),
 ("src/app/products/page.tsx",
  "B2B range from Yizhou: mulberry raw silk (20/22D, dupion, luxury, GOTS), greige, dupioni, satin, jacquard luo, georgette, habotai, stretch & blended. Sourced China.",
  "B2B range from Yizhou: mulberry raw silk (20/22D, dupion, luxury, GOTS), greige, dupioni, satin, jacquard luo, georgette, habotai, stretch & blended."),
 ("src/app/yizhou-raw-silk/page.tsx",
  "Yizhou, Guangxi: China's largest raw silk county — 5,463 t/year, 13.4% of national output, 20 years at No.1. The figures, the reeling, and what it means to buy.",
  "Yizhou, Guangxi: China's largest raw silk county — 5,463 t/year, 13.4% of output, 20 years No.1. The figures, the reeling, and what it means to buy."),
 ("src/app/samples/page.tsx",
  "Free silk mini-samples — fabric free, you pay courier only. Dupioni, satin, habotai, georgette, jacquard, raw yarn from Yizhou. Full-size samples chargeable.",
  "Free silk mini-samples — fabric free, you pay courier only. Dupioni, satin, habotai, georgette, jacquard, raw yarn from Yizhou. Full-size samples charged."),
 ("src/app/about/page.tsx",
  "Christopher Bu × Yizhou Silk links a couture house's red-carpet heritage with Yizhou — China's largest raw silk origin — supplying raw silk, greige and dupioni. B2B.",
  "Christopher Bu × Yizhou Silk links couture red-carpet heritage with Yizhou — China's largest raw silk origin — supplying raw silk, greige, dupioni. B2B."),
 ("src/app/silk-fabric-price-guide/page.tsx",
  "Why identical silk names get quotes that differ by a multiple: grade, momme basis, width, colour route, quantity, testing. Six drivers, twelve-point check, RFQ template.",
  "Why identical silk names get quotes that differ by a multiple: grade, momme basis, width, colour route, quantity, testing. Six drivers, twelve-point RFQ check."),
 ("src/app/silk-momme-guide/page.tsx",
  "Momme is weight (1 mm = 4.34 g/m²), but a greige-cloth momme overstates finished weight by 22–28%. Conversion table, use-case bands, five supplier questions.",
  "Momme is weight (1 mm = 4.34 g/m²); a greige-cloth momme overstates finished weight by 22–28%. Conversion table, use-case bands, five supplier questions."),
 ("src/app/wholesale-silk-fabric/page.tsx",
  "Wholesale silk from Yizhou: nine standing constructions, dyed to order on a standard shade card or custom match. Sampling, QC and FOB/FCA terms, step by step.",
  "Wholesale silk from Yizhou: nine standing constructions, dyed to order on a standard shade card or custom match. Sampling, QC and FOB/FCA terms."),
]
for rel, old, new in T:
    p = os.path.join(ROOT, rel)
    t = open(p, encoding="utf-8").read()
    if old not in t:
        print("MISS", rel); continue
    t = t.replace(old, new, 1)
    open(p, "w", encoding="utf-8").write(t)
    print(f"OK {rel} -> {len(new)}")
