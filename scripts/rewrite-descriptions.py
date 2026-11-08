#!/usr/bin/env python3
# 把 28 条超长 metaDescription/description 重写为 <=155 字符（关键词前置 + 保留 B2B/产地钩子）。
# 按唯一前缀精准替换，不动其它内容。
import re, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# (文件相对路径, 唯一前缀, 新描述)
M = [
 # products.ts
 ("src/lib/products.ts", "A filature silk measured at the delicate",
  "20/22 denier filature silk — the modern reeling benchmark. Fine, uniform mulberry yarn for weaving, knitting, embroidery and sarees. B2B from Yizhou."),
 ("src/lib/products.ts", "The natural, unbleached and un-dyed state",
  "Natural, unbleached dupion silk with warm, earthy tone and prominent slubs. The organic choice for curtains, lampshades and interiors. B2B from Yizhou."),
 ("src/lib/products.ts", "Curated from the finest batches of the silk",
  "Premium mulberry silk yarn, exceptional length and high-gloss sheen. Spun to preserve silk proteins — for statement garments with liquid drape. B2B Yizhou."),
 ("src/lib/products.ts", "Mulberry silk grown and processed to the Global",
  "GOTS-certified organic mulberry silk: raw, greige yarn or fabric, undyed or dyed to order. Verifiable organic status for compliance-driven buyers. B2B Yizhou."),
 ("src/lib/products.ts", "Source habotai silk fabric from Yizhou, China — a plain-weave",
  "Habotai (pongee/China silk) from Yizhou: 6–16 momme plain-weave mulberry, 114 cm, crisp hand. For linings, scarves, light shirts. B2B bulk supply."),
 ("src/lib/products.ts", "Source raw silk yarn from Yizhou, China in four",
  "Raw silk yarn from Yizhou in four varieties: 20/22D white, natural dupion, 1-ply luxury and GOTS organic. For weaving, knitting, embroidery. B2B bulk."),
 ("src/lib/products.ts", "Source lustrous satin silk fabric from Yizhou, China, in 10/12/14",
  "Satin silk from Yizhou: 10–30 momme, 114/140 cm, greige or dyed to order. For bridal, eveningwear and luxury linings. B2B bulk supply."),
 ("src/lib/products.ts", "Source jacquard luo silk fabric from Yizhou, China",
  "Jacquard luo silk from Yizhou — motifs woven into mulberry cloth on jacquard looms. Custom pattern development for couture and occasionwear. B2B."),
 ("src/lib/products.ts", "Source blended silk fabric from Yizhou, China",
  "Blended silk from Yizhou: silk-cotton and silk-linen weaves, 114/140 cm. Cotton or linen comfort with silk's sheen. For shirts and summer wear. B2B."),
 ("src/lib/products.ts", "Source dupioni silk with its signature slub",
  "Dupioni silk with signature slub texture from Yizhou: 16/19 momme (up to 22), 114/140 cm. For evening gowns, bridal and structured couture. B2B."),
 ("src/lib/products.ts", "Source greige (undyed, unfinished) mulberry silk",
  "Greige (undyed, unfinished) mulberry silk from Yizhou — cloth before dyeing or finishing, by base weave. Bulk supply; OEKO-TEX & GOTS on request."),
 ("src/lib/products.ts", "Source silk stretch satin fabric from Yizhou, China",
  "Stretch satin from Yizhou: mulberry-spandex satin weave, 14–28 momme, 140 cm, comfort stretch. Luminous face for bridal and eveningwear. B2B."),
 ("src/lib/products.ts", "Source georgette silk fabric from Yizhou, China",
  "Georgette silk from Yizhou: sheer crinkled mulberry, 8–16 momme, 114/140 cm. For scarves, summer wear and flowing dresses. B2B bulk supply."),
 # page.tsx
 ("src/app/trade-terms/page.tsx", "Export terms for Christopher Bu × Yizhou",
  "B2B export terms: FOB Nansha/Yantian/Qinzhou, FCA Yizhou, T/T payment, MOQ + 15–25 day lead time in writing. GOTS, OEKO-TEX II, market compliance."),
 ("src/app/products/page.tsx", "Browse Christopher Bu × Yizhou Silk B2B",
  "B2B range from Yizhou: mulberry raw silk (20/22D, dupion, luxury, GOTS), greige, dupioni, satin, jacquard luo, georgette, habotai, stretch & blended. Sourced China."),
 ("src/app/certificates/page.tsx", "Our local mill in Yizhou holds GOTS",
  "Yizhou local mill certified to GOTS, OEKO-TEX 100 Class II, China Organic and quality systems. Prop 65 and EU compliance reviewed before approval."),
 ("src/app/raw-silk-specs/page.tsx", "A buyer's spec sheet for 20/22 denier mulberry",
  "Spec sheet for 20/22D mulberry raw silk from Yizhou: four yarn varieties, 4A/5A/6A grades, HS 5002, bale packing, FOB/FCA, T/T. Values per written quote."),
 ("src/app/yizhou-raw-silk/page.tsx", "Yizhou, Guangxi is the largest raw silk producing",
  "Yizhou, Guangxi: China's largest raw silk county — 5,463 t/year, 13.4% of national output, 20 years at No.1. The figures, the reeling, and what it means to buy."),
 ("src/app/yizhou-raw-silk/page.tsx", "The largest raw silk producing county in China",
  "China's largest raw silk county: 5,463 t/year, 13.4% of national output, 20 straight years No.1 in sericulture scale among Chinese counties."),
 ("src/app/samples/page.tsx", "Free silk samples — no charge for the fabric",
  "Free silk mini-samples — fabric free, you pay courier only. Dupioni, satin, habotai, georgette, jacquard, raw yarn from Yizhou. Full-size samples chargeable."),
 ("src/app/silk-fabrics/page.tsx", "A working guide to silk fabric types",
  "22 silk constructions by weave, momme and use — from 5-momme habotai lining to 30-momme mikado. Which we stock from Yizhou, which are woven to order."),
 ("src/app/about/page.tsx", "Christopher Bu × Yizhou Silk bridges a couture",
  "Christopher Bu × Yizhou Silk links a couture house's red-carpet heritage with Yizhou — China's largest raw silk origin — supplying raw silk, greige and dupioni. B2B."),
 ("src/app/silk-fabric-price-guide/page.tsx", "Why two silk quotations for the same fabric",
  "Why identical silk names get quotes that differ by a multiple: grade, momme basis, width, colour route, quantity, testing. Six drivers, twelve-point check, RFQ template."),
 ("src/app/silk-momme-guide/page.tsx", "Momme is a weight unit — 1 momme is 4.34",
  "Momme is weight (1 mm = 4.34 g/m²), but a greige-cloth momme overstates finished weight by 22–28%. Conversion table, use-case bands, five supplier questions."),
 ("src/app/wholesale-silk-fabric/page.tsx", "Wholesale silk fabric from Yizhou, China",
  "Wholesale silk from Yizhou: nine standing constructions, dyed to order on a standard shade card or custom match. Sampling, QC and FOB/FCA terms, step by step."),
 ("src/app/couture/page.tsx", "A look at the couture design language of",
  "The Christopher Bu couture language — gowns showing how premium mulberry silk carries embroidery, drape and structure, from Yizhou's raw silk capital."),
 # blog.ts
 ("src/lib/blog.ts", "How dupioni silk travels from 20/22 denier",
  "Dupioni silk from 20/22D Yizhou raw silk to finished gown: slub texture, 19/23/30/40 momme, 5% shrinkage, with 2013 Fan Bingbing pieces as proof."),
 ("src/lib/blog.ts", "A practical guide for couture ateliers in",
  "For couture ateliers in Europe, North America and the Middle East sourcing mulberry silk: lead times, MOQ, FOB terms, landed cost, and why sample first."),
]

def main():
    problems = []
    for rel, prefix, new in M:
        path = os.path.join(ROOT, rel)
        t = open(path, encoding="utf-8").read()
        if len(new) > 155:
            problems.append(f"TOO LONG ({len(new)}): {rel}")
        pat = re.compile(r'((?:metaDescription|description)\s*:\s*")' + re.escape(prefix) + r'[^"]*"')
        cnt = len(pat.findall(t))
        if cnt == 0:
            problems.append(f"NO MATCH: {rel}  prefix={prefix[:40]}")
            continue
        t2 = pat.sub(lambda m: m.group(1) + new + '"', t, count=1)
        open(path, "w", encoding="utf-8").write(t2)
        print(f"OK  {rel}  -> {len(new)} chars")
    print("\n=== 校验 ===")
    if problems:
        for p in problems: print("  !", p)
    else:
        print("  全部替换成功且长度合规")

if __name__ == "__main__":
    main()
