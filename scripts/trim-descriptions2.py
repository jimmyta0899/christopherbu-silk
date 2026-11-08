#!/usr/bin/env python3
import os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
T = [
 ("src/app/raw-silk-specs/page.tsx",
  "A buyer's specification sheet for 20/22 denier mulberry raw silk yarn from Yizhou, China, covering denier, grade, HS heading 5002, packing, MOQ and export terms.",
  "Spec sheet for 20/22D mulberry raw silk from Yizhou: denier, grade, HS 5002, packing, MOQ and export terms, all per written quotation."),
 ("src/app/silk-fabric-price-guide/page.tsx",
  "Why identical silk names get quotes that differ by a multiple: grade, momme basis, width, colour route, quantity, testing. Six drivers, twelve-point RFQ check.",
  "Why identical silk names get quotes that differ by a multiple: grade, momme basis, width, colour route, quantity, testing. Six drivers, RFQ check."),
 ("src/lib/blog.ts",
  "How Yizhou, a longevity town in Guangxi that grows more mulberry silk than any county in China, became the source of silk for couture gowns seen on the world's red carpets.",
  "How Yizhou — a Guangxi longevity town that grows more mulberry silk than any Chinese county — became the source of silk for couture red-carpet gowns."),
 ("src/lib/blog.ts",
  "How a white mulberry silk gown with hand-embroidered red plum blossoms reached the 2018 Oscars red carpet, and what the embroidery tells buyers about specifying silk.",
  "How a white mulberry silk gown with hand-embroidered red plum blossoms reached the 2018 Oscars red carpet — and what it tells buyers about specifying silk."),
 ("src/app/sustainability/page.tsx",
  "Christopher Bu × Yizhou Silk supplies traceable mulberry raw silk and greige fabric with OEKO-TEX Standard 100 and GOTS certification available on request from local mills.",
  "Christopher Bu × Yizhou Silk supplies traceable mulberry raw silk and greige fabric; OEKO-TEX 100 and GOTS certification available from local mills on request."),
]
for rel, old, new in T:
    p = os.path.join(ROOT, rel)
    t = open(p, encoding="utf-8").read()
    if old not in t:
        print("MISS", rel); continue
    t = t.replace(old, new, 1)
    open(p, "w", encoding="utf-8").write(t)
    print(f"OK {rel} -> {len(new)}")
