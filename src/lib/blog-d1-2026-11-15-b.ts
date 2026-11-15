// 由 sprint-kit/convert-d1-2026-11-15.mjs 从 d1-drafts-2026-11-15/drafts/*.md 生成，请勿手工编辑。
// 重新生成：node sprint-kit/convert-d1-2026-11-15.mjs
import type { BlogPost } from "./blog";

export const d1Nov15bPosts: BlogPost[] = [
  {
    "slug": "four-point-fabric-inspection-report",
    "title": "How to Read a Four-Point Fabric Inspection Report",
    "metaDescription": "A four-point report is a division. What was counted, what area it was divided by, and which rolls the result describes decide whether a roll is accepted, and one roll can be scored three ways.",
    "type": "Quality / inspection",
    "publishDate": "2026-11-15",
    "keywords": [
      "silk fabric inspection",
      "four point system",
      "AQL sampling",
      "fabric defects",
      "textile quality control"
    ],
    "anchorTexts": [
      "See the dupioni fabric specification",
      "silk fabric inspection standards",
      "four point acceptance clauses"
    ],
    "linkTo": "/products/dupioni",
    "coverImage": {
      "src": "/products/dupion-silk-yarn.webp",
      "alt": "Three hanks of undyed silk yarn in skeins, pale white filament lying parallel along each hank",
      "caption": "Raw Silk Yarn in skeins, three hanks of undyed filament | Site product image /products/dupion-silk-yarn.webp, photographed in house by Christopher Bu (Yizhou) | White undyed filament in hank form, fibres lying parallel along each skein, thick and thin places visible where filaments cross; no count or twist stated on the asset | Undyed yarn before weaving, part of the site's in-house product photography collection, undated"
    },
    "intro": "An inspection report puts one number at the top, a figure such as 28.6 points per 100 square yards quoted without its formula, and a decision follows: accept the roll, claim against it, or send it back. The number looks measured. It is a division, and behind it sit conventions buyer and seller may have set differently: what was counted, what area it was divided by, and which rolls the answer describes.",
    "takeaways": [
      "A four-point score is total penalty divided by area, so the denominator can decide the verdict as surely as the faults do[6].",
      "One hypothetical roll with 35 points reads 18.10 per 100 yd² and 21.65 per 100 m², a step of 19.6% that comes from the unit, not the cloth (Hossain and Islam, 2023)[6][7].",
      "Whether a small fault scores at all is a contract choice: one published convention excludes minor faults, another scores every fault by size[7][6].",
      "A score per roll and an average per shipment answer different questions, and either may be used for acceptance by agreement[1].",
      "No standard sets a pass mark. ASTM's own text says the same rolls can score very differently under different options[1]."
    ],
    "sections": [
      {
        "heading": "What the four-point score actually measures",
        "body": "A four-point score counts penalised faults and divides them by the area inspected. A **penalty point** is the unit being counted, assigned by a size band[6] or by an expert's judgement of kind, severity and amount[7]. Tastimur, Akin and Agrikli call the four-point system the method used to regulate fabric quality in the apparel sector, and note that the Dallas system, the Graniteville 78 method, the four-point system and the ten-point system all remain in use[7]. A report that does not name its system has given a number without a unit of meaning.\n\nThe bands come first. Hossain and Islam print them in their Table 1, recorded as following ASTM D5430-13(2017): a fault up to 3 in scores 1, over 3 in and up to 6 in scores 2, over 6 in and up to 9 in scores 3, over 9 in scores 4, and any hole except a pin hole scores 4 whatever its size[6]. Size is not the only axis either: Tastimur and colleagues describe criteria an expert sets on the kind, severity and amount of a fault, with points from one to four[7]. The two can score one fault differently, so the report has to say which it used. Hossain and Islam's study is knit work from Bangladeshi circular knitting factories, so its bands describe that setting rather than woven silk.\n\nThe standard behind the looking is not a rule for accepting. ASTM D5430 describes procedures to examine and grade fabrics by visual inspection, and states that when purchaser and seller agree, those procedures may be used for acceptance of individual rolls and shipments[1]. The permission is conditional. What the score then does not hold matters as much: it records neither where the faults sat, nor what they were, nor which process made them, and two rolls can share a score while being unsellable in different places."
      },
      {
        "heading": "The denominator is where reports go wrong",
        "body": "The formula Hossain and Islam use is points per 100 yd² equals total points multiplied by 36 and by 100, divided by the product of roll length in yards and cuttable width in inches[6]. The constants are geometry. Area in square inches is length in yards times 36 times width in inches, and 100 yd² is 129,600 in², so 129,600 ÷ 36 gives 3,600; in metric, 100 m² is 1,000,000 cm², and 1,000,000 ÷ 100 gives 10,000. A report that prints its formula lets a reader check both halves.\n\n**Cuttable width** is the width of cloth a cutting table can use, and it is measured in a tension-free relaxed state[4]. It is not the width the loom was set to. [ISO 22198](https://www.iso.org/standard/40768.html) sets out that determination of length and width, covering full width, folded and tubular fabric up to 100 m, and states that it does not treat construction defects or other defects[4]. Width and faults on one sheet come from two measurements.\n\nThe numerator carries a convention too. Tastimur and colleagues state that minor faults do not contribute to the penalty points, and that fabric quality is graded in points per 100 m²[7]. The band table works the other way, since a fault of 3 in or less still carries a point[6]. Both are published procedures and neither is right in the abstract; the choice belongs in the contract and on every report, since a report that counts minor faults and one that ignores them are not comparable."
      },
      {
        "heading": "Nineteen percent appears out of nowhere",
        "body": "The roll below is constructed, not inspected: 120 yd long, 58 in cuttable width, 35 penalty points. Every figure is arithmetic on those inputs.\n\n<table>\n\n<caption>Table 1. One hypothetical roll, 120 yd long with a cuttable width of 58 in and 35 penalty points, scored five ways. All figures are arithmetic on constructed inputs, not inspection results. Constants: 1 yd = 0.9144 m, 1 in = 2.54 cm, 1 yd² = 0.83612736 m².</caption>\n\n<thead>\n\n<tr><th>Convention</th><th>Arithmetic</th><th>Result</th></tr>\n\n</thead>\n\n<tbody>\n\n<tr><td>a. Standard square-yard convention</td><td>35 × 3600 ÷ (120 × 58)</td><td>18.10 per 100 yd²</td></tr>\n\n<tr><td>b. Loom width of 60 in used instead of cuttable width</td><td>35 × 3600 ÷ (120 × 60)</td><td>17.50 per 100 yd²</td></tr>\n\n<tr><td>c. Square-metre convention, 120 yd as 109.73 m and 58 in as 147.32 cm</td><td>35 × 10000 ÷ (109.73 × 147.32)</td><td>21.65 per 100 m²</td></tr>\n\n<tr><td>d. Ratio of the square-metre reading to the square-yard reading</td><td>21.65 ÷ 18.10</td><td>1.196, a rise of 19.6%</td></tr>\n\n<tr><td>e. Four minor faults added at one point each, graded by the standard convention</td><td>39 × 3600 ÷ (120 × 58)</td><td>20.17 per 100 yd²</td></tr>\n\n</tbody>\n\n</table>\n\nRow b is the quiet one. A loom width of 60 in spreads the same penalty over more area and lowers the reading. ASTM anticipates this: the penalty points obtained in grading the same rolls may vary considerably under each of the options listed, and the same option should be used when purchaser and supplier disagree[1].\n\nRow c is the loud one. Under the square-metre convention Tastimur and colleagues use[7], the same 35 points become 21.65 per 100 m², a ratio of 1.196, and the nineteen percent is not a change in the cloth: one square yard is 0.83612736 m², so points per square yard must grow by the reciprocal of that figure when counted per square metre.\n\nRow e costs money. Count the four faults the square-metre convention would ignore at one point each, and 35 becomes 39, so the formula returns 20.17 per 100 yd². Against a contract limit of 20 the roll passes at 18.10, fails at 20.17, and fails again if 21.65 is read against 20 without noticing the unit. One roll, one set of faults, three verdicts.\n\nNo measurement was taken for this table; the method is arithmetic on the two published formulas, and the methodology was checked by recomputing each output from its inputs before publication."
      },
      {
        "heading": "One roll is not the lot",
        "body": "ASTM D5430 permits acceptance of individual rolls and of shipments in one clause, subject to agreement[1]. Those are two populations, and a report that does not say which it scored cannot settle a dispute about the other. A shipment average is built from roll scores, so a lot can sit inside a limit while one roll sits outside it, and the average cannot name that roll. A per-roll score says nothing about the next roll. Published lot-level work shows the scale involved: Hossain and Islam report 55,524.91 m² inspected, made up of 18,405.10 m² of single jersey, 27,308.67 m² of fleece and 9,811.14 m² of 1X1 rib[6].\n\nFor example, a constructed lot of five rolls might average 18 points per 100 yd² while one carries 31, and no lot-level total lets a buyer find that roll. The figures are invented, not measured.\n\nThe unit of sale matters too. One peer listing for a slubbed silk sells by the roll, with a minimum of one roll at roughly 30 to 35 m beside composition, widths, weight band, texture, drape, care and customisation as separate fields[12]. Beneath it sits a human layer: published work records that fault detection in the knitting industry is done manually by the human naked eye[8]."
      },
      {
        "heading": "The most frequent defect is not the most costly one",
        "body": "Hossain and Islam put the problem in a sentence: the subjective nature of defect detection by knitters and inspectors often causes wrong emphasis on frequently occurring defects instead of on influential ones[6]. In their data gout on 1X1 rib was judged both the most frequent and the most influential, and the paper treats that as a misjudgement[6].\n\nThe mechanism belongs to counting. A defect list sorted by occurrence makes its first line the headline, but that column counts events; the point column weights them, by size[6] or by kind, severity and amount[7]. A report can be accurate and still mislead a reader who treats count as cost.\n\nThe categories give the count its use. [ISO 8498](https://www.iso.org/standard/15708.html) defines woven-fabric defects as characteristics unintentionally introduced into the fabric, and sorts them into general, yarn, weft, warp, selvedge, and faults that appear only after finishing[3]. A count by name hides which of those owns the fault; a count by category points at a machine, a yarn lot or a finishing bath, where the standard also says the presence of a listed characteristic does not automatically imply that the fabric is sub-standard[3]."
      },
      {
        "heading": "When a slub is not a defect",
        "body": "Some thickness variation exists before the cloth is woven. CAMEO describes dupion silk as an irregular thread produced when threads from two or more cocoons are spun together, giving a rough yarn with uneven thick and thin areas[9]. The London Museum's doppiona record adds the consequence: the thicker thread contains irregularities, but the silk woven from it dyes well and creases less[10].\n\nWhen a report lists slubs or thick places, the question is not whether they exist. ISO 8498's definition turns on whether a characteristic was unintentionally introduced[3], and in this yarn the variation enters when filaments are combined[9][10]. The question is whether that size and frequency were accepted when the cloth was specified.\n\nSuppliers answer it at product level. One product page carries a disclaimer covering shade variation and natural imperfections, advises allowing extra material, and offers a sample before an order[11]; another lists texture, drape, care and customisation as separate fields[12]. Both put the boundary in the specification, ahead of any roll being examined."
      },
      {
        "heading": "A score is not an AQL",
        "body": "The two terms get used as if exchangeable. **Acceptance quality limit** is the maximum average percentage of defective items considered acceptable during random sampling, and [ISO 2859-1](https://www.iso.org/standard/85464.html) names it the AQL[2]. Its unit is a percentage of units, while a four-point score's unit is points per area[6][7]. One is a proportion of failing rolls, the other a density of penalty.\n\nThe 2026 edition is the third. It adds skip-lot sampling procedures and replaces the edition of 1999, and it carries switching rules under which worsening quality moves a supplier to tightened inspection and improving quality to reduced inspection[2].\n\nThe two can disagree without either being wrong: a lot can pass an attribute sampling plan and still carry a high penalty density, and a lot can fail on one defective roll while the average score looks comfortable. For example, a shipment can clear a sampling plan because few rolls fail the pass or fail test while those same rolls carry a penalty density above the agreed limit, since the plan never weighs area.\n\nThe published summary of ISO 2859-1 sets out no acceptance and rejection figures, so those must come from the standard[2]. Pass marks sit in the same place: neither ASTM D5430 nor ISO 8498 states a score at which cloth becomes unacceptable[1][3]. Acceptable points per 100 yd² mostly depend on buyer and seller agreeing, and the 20 and 30 point bands are the study's own[6].\n\n<table>\n\n<caption>Table 2. Four documents, four objects: the thing counted, how a penalty arises, and what each says about a pass mark. Version numbers as published.</caption>\n\n<thead>\n\n<tr><th>Document</th><th>Object</th><th>Penalty</th><th>Pass mark</th></tr>\n\n</thead>\n\n<tbody>\n\n<tr><td>ASTM D5430-26[1]</td><td>Visual examination and grading, usable for acceptance by agreement</td><td>Not fixed; points vary between the listed options, and one option must be used in a disagreement</td><td>None published in the standard's summary</td></tr>\n\n<tr><td>ISO 8498:1990[3]</td><td>Vocabulary: defects are characteristics unintentionally introduced</td><td>None; faults classed as general, yarn, weft, warp, after finishing, selvedge</td><td>A listed characteristic does not automatically imply sub-standard cloth</td></tr>\n\n<tr><td>Hossain and Islam 2023[6]</td><td>Points per 100 yd²; bands recorded as following ASTM D5430-13(2017)</td><td>One point at 3 in or less, four above 9 in, four for any hole but a pin hole</td><td>Depends on agreement; the paper's 20 and 30 point bands are its own</td></tr>\n\n<tr><td>Tastimur et al. 2025[7]</td><td>Points per 100 m², in what the paper calls the apparel sector's method</td><td>One to four on expert criteria of kind, severity and amount; minor faults do not score</td><td>Not addressed; the paper concerns automated classification</td></tr>\n\n</tbody>\n\n</table>\n\nAutomation changes none of this. Machine vision has been shown to perform four-point scoring on a benchmark set of seven defect classes recorded on greige cloth and on cloth after wet processing[8]. That changes who finds the faults, not what they mean."
      },
      {
        "heading": "What to write into the inspection clause",
        "body": "A short list turns a report from an announcement into a document a buyer can act on.\n\n1. The system, named, with its option set: four-point, and then whether faults are banded by size[6] or judged on kind, severity and amount[7].\n\n2. The minor fault rule, since one convention excludes minor faults and another scores a small fault[7][6].\n\n3. The width, defined as cuttable width and measured in a tension-free relaxed state[4], with a line stating that loom width is not the denominator.\n\n4. The denominator and its constant, printed as a formula: 3,600 for points per 100 yd²[6], 10,000 for points per 100 m²[7].\n\n5. The population and sampling plan, per roll or per shipment or by a named sampling standard and edition[2], with score and pass or fail kept apart.\n\n6. The defect vocabulary by category rather than by name, so counts can be compared between reports[3].\n\n7. The inherent variation accepted for the cloth ordered, as a slub size, a frequency per unit of length and a statement of where in the piece it is counted, taken from the product specification, not the inspector's judgement[9][10][11].\n\n8. The tie-break: where buyer and supplier disagree, both grade with the same point assignment option[1].\n\n9. Length and width per roll, since a score without its inputs cannot be rechecked, and, where weight is specified, which weight, because mass per unit length and mass per unit area diverge as structure varies[5].\n\nNone of this sets a pass mark, which is the point. A score just inside a limit is not good cloth and one just outside is not bad cloth; the number acquires meaning only against a threshold two parties signed, computed by a formula both can reproduce, over a population both had in mind. Where the cloth is a slubbed silk, the specification must also say which thick places were bought on purpose[9][10]. The production-side case is set out in [how to agree a slub tolerance in the contract](/blog/dupioni-slub-acceptance). Every claim on this page was checked against the source cited for it before publication."
      },
      {
        "heading": "Where this report sits in the buying sequence",
        "body": "- [Silk fabrics](/silk-fabrics/) for the weaves and weights a report is written against.\n- [Silk fabric price guide](/silk-fabric-price-guide/) for how weight and width move a quotation before a roll is cut.\n- [Momme, GSM and ounce converter](/tools/momme-gsm-oz-converter/) for checking a weight in its quoted unit.\n- [How to read a silk swatch card](/blog/how-to-read-a-silk-swatch-card/) for the fields that should be settled before the report lands."
      }
    ],
    "references": [
      {
        "publisher": "ASTM",
        "title": "D5430-26 Standard Test Methods for Visually Inspecting and Grading Fabrics",
        "year": "2026",
        "url": "https://www.astm.org/d5430-26.html"
      },
      {
        "publisher": "ISO",
        "title": "ISO 2859-1:2026 Sampling procedures for inspection by attributes, Part 1",
        "year": "2026",
        "url": "https://www.iso.org/standard/85464.html"
      },
      {
        "publisher": "ISO",
        "title": "ISO 8498:1990 Woven fabrics, Description of defects, Vocabulary",
        "year": "1990",
        "url": "https://www.iso.org/standard/15708.html"
      },
      {
        "publisher": "ISO",
        "title": "ISO 22198:2006 Textiles, Fabrics, Determination of width and length",
        "year": "2006",
        "url": "https://www.iso.org/standard/40768.html"
      },
      {
        "publisher": "ISO",
        "title": "ISO 3801:1977 Textiles, Woven fabrics, Determination of mass per unit length and mass per unit area",
        "year": "1977",
        "url": "https://www.iso.org/standard/9335.html"
      },
      {
        "publisher": "Hossain, A. K. M. M. and Islam, M. I",
        "title": "Exploring weft knit fabric defects based on their presence and quality impact: A case study",
        "year": "2023",
        "url": "https://cdatp.publia.org/cdatp/article/view/11"
      },
      {
        "publisher": "Tastimur, C., Akin, E. and Agrikli, M",
        "title": "Fabric Faults Robust Classification Based on Logarithmic Residual Shrinkage Network in a Four-Point System",
        "year": "2025",
        "url": "https://www.mdpi.com/2076-3417/15/12/6783/html"
      },
      {
        "publisher": "Islam, M. I. et al",
        "title": "An approach to automatic fault detection in four-point system for knitted fabric with our benchmark dataset Isl-Knit",
        "year": "2024",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39676831/"
      },
      {
        "publisher": "CAMEO, Museum of Fine Arts Boston",
        "title": "Dupion silk",
        "year": "n.d.",
        "url": "https://cameo.mfa.org/wiki/Duopion"
      },
      {
        "publisher": "London Museum",
        "title": "Sample, coiled sample of doppiona silk",
        "year": "n.d.",
        "url": "https://www.londonmuseum.org.uk/collections/v/object-277386/sample-coiled-sample-of-doppiona-silk"
      },
      {
        "publisher": "Puresilks",
        "title": "100% pure silk dupioni fabric, 40 momme, 54 wide, with slubs",
        "year": "n.d.",
        "url": "https://www.puresilks.us/products/100-pure-silk-dupioni-fabric-gold-40-momme-54-wide-with-slubs"
      },
      {
        "publisher": "Silk Designs",
        "title": "Dupion Silk or Dupioni Silk",
        "year": "n.d.",
        "url": "https://silkdesigns.co/?p=1262"
      }
    ]
  }
];
