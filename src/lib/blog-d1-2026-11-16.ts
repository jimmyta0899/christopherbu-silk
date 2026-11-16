// 由 sprint-kit/convert-d1-2026-11-15.mjs 从 d1-drafts-2026-11-15/drafts/*.md 生成，请勿手工编辑。
// 重新生成：node sprint-kit/convert-d1-2026-11-15.mjs
import type { BlogPost } from "./blog";

export const d1Nov16Posts: BlogPost[] = [
  {
    "slug": "how-silk-fabric-weight-is-measured",
    "title": "How Silk Fabric Weight Is Measured, and Why a Swatch Is Not a Lot",
    "metaDescription": "A fabric weight in g/m² is a mass divided by an area, taken from a named population in a named atmosphere. Which of the four sampling options produced it decides whether the number describes your lot.",
    "type": "Measurement / testing",
    "publishDate": "2026-11-16",
    "keywords": [
      "silk fabric weight",
      "gsm measurement",
      "mass per unit area",
      "fabric testing",
      "silk quality control"
    ],
    "anchorTexts": [
      "See the satin silk specification",
      "silk fabric weight test method",
      "mass per unit area sampling options"
    ],
    "linkTo": "/products/satin",
    "coverImage": {
      "src": "/products/satin.webp",
      "alt": "Deep red silk satin fabric filling the frame, with a smooth glossy surface and soft highlights across the face",
      "caption": "Satin Silk Fabric, red satin face | /products/satin.webp, in-house product photography | High-lustre face, flat and even; width and weight not marked on the asset | Undated, from the site's product collection."
    },
    "intro": "A mass per unit area result is a division: grams of cloth over square metres of cloth. The division is the easy part. What decides whether the number describes your shipment is what went on the balance, how many pieces of it, and in what air. ASTM D3776 leaves those choices to four named options[2](https://dlvn.khoweb24h.com/uploads/files/ASTM%20D3776-09.pdf), and its small-swatch option carries a sentence that buyers read past: the results are considered applicable to the sample only and not necessarily to the lot[2]. Two honest reports can still disagree about the same cloth.",
    "takeaways": [
      "A g/m² figure is a mass over an area, so the population the mass came from decides what it describes[2].",
      "ASTM D3776 names its full-piece option for acceptance testing of commercial shipments and limits the small-swatch option to the sample[2].",
      "Conditioning moves the reading by an amount comparable to the tolerance a contract may set, so the air belongs in the report[10].",
      "A report without the option, the specimen count, the atmosphere and the balance tolerance cannot be checked against your own re-test[2][9].",
      "Width matters twice: once when a figure is converted, and once when the cloth is measured slack rather than under tension[6](https://www.iso.org/standard/40768.html)."
    ],
    "sections": [
      {
        "heading": "What the number on a spec sheet actually measures",
        "body": "**Mass per unit area** is a mass divided by an area[1](https://www.iso.org/standard/9335.html), which is why the unit is written as grams over square metres rather than as a single weight. It is not thickness. ISO 5084 describes a method for the determination of the thickness of textiles and textile products under specified pressure, and it is not applicable to textile floor coverings, nonwovens, geotextiles and coated fabrics[11](https://www.iso.org/standard/23348.html). It is not momme either, though momme is the trade's name for the same quantity; the conversion between the two units is set out in [the momme guide](/silk-momme-guide/).\n\nThe unit also tells you which quantity you hold. ISO 3801 gives the reason grams per metre and grams per square metre are not interchangeable by width alone. For some fabrics the two are related simply by the width, but for others variations in structure may introduce an important distinction between them[1]. Take a figured jacquard, for example, where the ground and the figure take up yarn at different rates. No single width converts one figure into the other.\n\nIts scope is wider than buyers expect: woven fabrics including stretch types, made up full width or folded down the middle, complete pieces as well as sample lengths[1]. The folded state is the part that trips a conversion. Cloth presented folded down the middle and the same cloth opened out are two different widths, so a mass reported against length becomes a mass per unit area only once the width and the presentation are both known.",
        "image": {
          "src": "/products/satin.webp",
          "alt": "Deep red silk satin fabric filling the frame, with a smooth glossy surface and soft highlights across the face",
          "caption": "Satin Silk Fabric, red satin face | /products/satin.webp, in-house product photography | High-lustre face, flat and even; width and weight not marked on the asset | Undated, from the site's product collection."
        }
      },
      {
        "heading": "Four sampling options, and only one of them is a lot result",
        "body": "**Option A** is the full-piece route, the one ASTM D3776 ties to trade practice[2](https://dlvn.khoweb24h.com/uploads/files/ASTM%20D3776-09.pdf). Its text says the option may be used for acceptance testing of commercial shipments since it has been used extensively in the trade. **Option C** is the small-swatch route, and it runs the other way: the results are considered to be applicable to the sample only and not necessarily to the lot[2].\n\nTable 1. The four sampling options named in ASTM D3776, as stated in the section text read for this page. \"Not stated\" marks cells the text does not cover.\n\nOption B is named for the full width and Option D for narrow fabrics. A figure in grams per square metre alone has not said which of the four produced it[2].\n\nThe small-sample method is also a standard in its own right. EN 12127 describes methods for mass per unit area using small samples in the standard atmosphere and/or oven-dry, for woven and knitted fabrics, and its contents include a sampling clause and an annex of suggested sampling[5](https://standards.iteh.ai/catalog/standards/cen/6b6e76dd-ddd8-4271-84a1-d3f834f01b1d/en-12127-1997). Sample size is therefore a decision the method addresses rather than a detail left to an operator.\n\nNational systems adopt rather than copy. GB/T 4669-2008 is recorded as a modified adoption of ISO 3801:1977, covers whole pieces or one piece with elastic fabrics included, and references a standard atmosphere standard, an official moisture regain standard and a rounding rule[7](https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=531DE82A840614255846157F4369461C). A national edition such as this one names what a mass result depends on: the air, the regain convention and the digits kept.",
        "table": {
          "headers": [
            "Option and object",
            "Specimen",
            "Commercial acceptance",
            "Result describes"
          ],
          "rows": [
            [
              "Option A, full piece, roll, bolt or cut (Section 7)",
              "The complete piece",
              "May be used for acceptance testing of commercial shipments, having been used extensively in the trade",
              "The piece weighed"
            ],
            [
              "Option B, full width sample (Section 8)",
              "Not stated",
              "Not stated",
              "Not stated"
            ],
            [
              "Option C, small swatch of fabric (Section 9)",
              "A swatch rather than a piece",
              "Results applicable to the sample only and not necessarily to the lot",
              "The sample only"
            ],
            [
              "Option D, narrow fabrics (Section 10)",
              "Not stated",
              "Not stated",
              "Not stated"
            ]
          ]
        }
      },
      {
        "heading": "What the air in the room does to the reading",
        "body": "**Conditioning** is the exposure of a specimen to a stated atmosphere until its mass stops drifting[4](https://www.astm.org/d1776_d1776m-20.html). ASTM D1776 makes the reason explicit. Because prior exposure of textiles to high or low humidity may affect moisture pick-up equilibrium, a preconditioning procedure is also given when required.\n\nThe atmosphere has numbers attached. ASTM D3776 asks for 21 ± 1 °C and 65 ± 2 % RH when textile specimens are weighed[2]. ISO 139 defines the standard atmosphere and a standard alternative that the parties may agree to use[3](https://www.iso.org/standard/35179.html). The numeric detail behind that definition comes from the standard's catalogue listing, which transcribes a primary atmosphere of 20.0 °C and 65.0 % RH with tolerances of ±2.0 °C and ±4.0 % RH[12](https://standards.iteh.ai/catalog/standards/sist/bc3ba05c-b1bf-4e50-9196-cca8b5bfe180/sist-en-iso-139-2005). The same listing transcribes 23.0 °C and 50.0 % RH for the alternative, used by agreement between the parties. It also gives a pre-conditioning band of 10 to 25 % RH under a ceiling of 50 °C, and an equilibrium criterion based on successive weighings at two-hour intervals. It adds that the run ends when no progressive mass change above 0.25 % remains, and that the test report must identify the specimen, cite ISO 139:2005 and state any deviations[12].\n\nThe escape clause matters as much. ASTM D3776 states that when full rolls cannot be properly conditioned in reasonable time, tests are run without conditioning and the actual conditions are reported. It adds that such results may not correspond with results from adequately conditioned specimens[2]. An unconditioned report can be compliant and still not comparable.\n\nSilk makes the difference visible. Nabi, Mohsin and Shah measured regain on Pakistani silk in 1972, using a vacuum desiccator and saturated salt solutions, at least four days at each step and a cycle of about five months[10]. Their setting was specific: 25 °C rather than 20 °C, on 1 g specimens. Nothing below is a constant for silk in general.\n\nThe same cloth weighed at 42.8% and 65.0% RH differs by 2.60% at one end of the paper's range and 3.33% at the other, while the two approach directions differ by 1.06% and 1.15%[10](https://pjsir.org/multidisciplinary-archive/Volume%2015%201972/Issue%206/Article%2021%20Vol%2015%20Issue%206%201972.pdf). The mechanism behind both effects is recorded in ASTM D1776[4](https://www.astm.org/d1776_d1776m-20.html), which warns that prior exposure of textiles to high or low humidity may affect moisture pick-up equilibrium.\n\nTable 2. Four recomputations from Nabi, Mohsin and Shah (1972), Table 3 and Table 5: arithmetic on published regain values, computed for this page and not measured here. Rows a and b step one cloth between two humidities; rows c and d compare the two directions at one humidity.\n\nRows a and b are a humidity step: one cloth, two humidities, weighed once at each. The spread between the lowest pair and the highest pair in the paper is also the spread between those two rows. Rows c and d are hysteresis, meaning cloth that arrives at one humidity from a drier or wetter state holds a different amount of water. Against a contract that allows three per cent either side, the humidity step alone reaches or passes the whole band before anyone questions the weaving[10].\n\nThe paper also shows why regain is a convention rather than a constant. For its reference atmosphere at 25 °C, the authors suggest 11.0 as the official regain, and 10.5 for the practical conditions prevailing in Pakistan. They also find yellow above white and raw above degummed, because sericin takes up more moisture[10]. None of those values is a figure for Chinese silk at 20 °C, which is why the boundary sentence above matters.\n\nChina's standard for official moisture regain is GB/T 9994-2018, replacing the 2008 edition[8](https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=BDBFD42F23E5CDEFF7CACC8F73FB3EA4&refer=outter). Its table values were not available here, so none are quoted.",
        "table": {
          "headers": [
            "Case",
            "Arithmetic",
            "Reading differs by (%)"
          ],
          "rows": [
            [
              "a. Sorption, lowest pair (6.73 to 9.50)",
              "(1 + 0.0950) ÷ (1 + 0.0673)",
              "+2.60"
            ],
            [
              "b. Sorption, highest pair (7.28 to 10.85)",
              "(1 + 0.1085) ÷ (1 + 0.0728)",
              "+3.33"
            ],
            [
              "c. Sorption against desorption, white silk (10.63 to 11.80)",
              "(1 + 0.1180) ÷ (1 + 0.1063)",
              "+1.06"
            ],
            [
              "d. Same comparison, yellow silk (10.88 to 12.15)",
              "(1 + 0.1215) ÷ (1 + 0.1088)",
              "+1.15"
            ]
          ]
        }
      },
      {
        "heading": "The arithmetic, and the case where it fails",
        "body": "Once a specimen is on the balance the calculation is short: a square decimetre is 0.01 m², so the mass in grams divided by 0.01 is the mass multiplied by 100. The equipment sets the resolution. ASTM D3776 specifies a balance that weighs within ±0.1% of the mass of the specimens being tested, and a cutting die, square or round, of at least 13 cm²[2](https://dlvn.khoweb24h.com/uploads/files/ASTM%20D3776-09.pdf). A 10 cm square die clears that floor at 100 cm², which is why the die size is worth asking about.\n\nA result is usually an average. RISE, an ISO/IEC 17025 accredited laboratory, describes one test under the small-sample method as five specimens of 1 dm² each, conditioned in a defined climate and weighed[9](https://www.ri.se/en/what-we-do/services/determination-of-mass-per-unit-area-using-small-samples). That description belongs to the laboratory and to the method it names, not to a clause of ISO 3801. It is also why a report showing one figure is hiding four others.\n\nThe method fails in identifiable places. Structure is the first: where it varies, mass per unit length and mass per unit area stop being convertible by width, the distinction ISO 3801 raises at the top of its scope[1]. Width is the second. ISO 22198:2006 specifies a method for the determination of length and width of textile fabrics that are in a tension-free relaxed state, for full-width, folded and tubular pieces no longer than 100 m[6](https://www.iso.org/standard/40768.html). It also states that it does not specify a method to determine or describe construction defects or other defects. A width taken under tension, converted into a denominator, carries that tension into the answer.\n\nISO 3801 brings stretch fabrics inside its scope rather than leaving them out, so the same care applies to them[1]. Cut a specimen with a die smaller than the one specified, for instance, and the arithmetic stays right while the result gets less representative of the piece."
      },
      {
        "heading": "What a usable test report has to contain",
        "body": "**A test report** is usable against a re-test only when it names six things, and each of them maps to a clause above.\n\n1. **The option used**, by letter or national equivalent, because a full piece and a swatch answer different questions[2][7].\n\n2. **Specimen count and area**, because one figure may be an average of five and the die area sets the arithmetic[9][2].\n\n3. **Conditioning state and atmosphere**, or the actual conditions if the test ran without conditioning[2][4][3].\n\n4. **Balance tolerance**, since a balance outside the tolerance the method sets cannot support the figure[2].\n\n5. **Individual specimen results**, not only the mean, because the spread between five specimens is information the mean removes[9].\n\n6. **The standard and its edition**, because clause numbering and detail differ between editions[2][1].\n\nThe edition field is not pedantry. The copy of ASTM D3776 read for this page is the 09a print, reapproved in 2013; the current designation is D3776/D3776M-20, and the clause numbers above follow the text that was read[2]. A citation without an edition leaves the reader unable to tell which clause set the sampling."
      },
      {
        "heading": "Checking a supplier's figure against your own re-test",
        "body": "Order of questions decides the answer. Ask which option produced the figure, then how many specimens and at what area, then the conditioning state, then the balance tolerance. Only after those four does the number mean anything. A swatch result and a full-piece result answer for two populations, and the standard says so in one sentence for Option C[2].\n\nThen compare with a budget in mind. On silk the humidity step in Table 2 is worth more than a percentage point of the reading, and hysteresis at a steady humidity adds a second slice[10]. A re-test landing below a supplier's figure is not automatically a lighter cloth. It may be the same cloth in different air, so condition both and weigh both at one stated atmosphere[2][4].\n\nDo the re-test on a specimen large enough for the die and heavy enough for the balance, keep each result, and keep the atmosphere on the sheet[2][9]. Ask the person who signed the report, not a sales contact, for the individual readings. A kitchen scale and a squared-off offcut satisfy neither requirement. A single specimen without its air is a number nobody can defend a year later."
      },
      {
        "heading": "Is g/m² the same as momme?",
        "body": "No. Both express mass per unit area in different units, and converting between them is a separate question. The conversion is set out in the momme guide on this site; the sampling rules here apply to either unit.",
        "level": 3
      },
      {
        "heading": "Why is my own weighing lower than the supplier's report?",
        "body": "Usually because the air differs. The humidity step in Table 2 is larger than the hysteresis between the two directions, and both are large enough to be mistaken for a weight difference[10]. Ask for the conditioning state before treating the gap as a weight difference[2][4].",
        "level": 3
      },
      {
        "heading": "Can a swatch result be used to accept a shipment?",
        "body": "Not on the strength of the number alone. ASTM D3776 concludes that results from its small-swatch option apply to the sample only and not necessarily to the lot[2](https://dlvn.khoweb24h.com/uploads/files/ASTM%20D3776-09.pdf). A contract may accept one, but that is a term the parties wrote.",
        "level": 3
      },
      {
        "heading": "Which atmosphere should a silk test use?",
        "body": "ASTM D3776 asks for 21 ± 1 °C and 65 ± 2 % RH for textile weighing[2]. ISO 139 defines the standard atmosphere and a standard alternative usable by agreement[3](https://www.iso.org/standard/35179.html). The specific figures are 20.0 °C and 65.0 % RH with tolerances of ±2.0 °C and ±4.0 % RH, transcribed from the standard listing rather than from its abstract[12].",
        "level": 3
      },
      {
        "heading": "Does a heavier weight mean a thicker cloth?",
        "body": "No. ISO 5084 treats thickness as its own determination, under specified pressure[11](https://www.iso.org/standard/23348.html). A mass per unit area figure says nothing about how thick the cloth is.",
        "level": 3
      },
      {
        "heading": "The adjacent pages, and what each one settles",
        "body": "- [Silk fabrics](/silk-fabrics/) for the weaves a report is describing, greige through finished.\n- [Momme, GSM and ounce converter](/tools/momme-gsm-oz-converter/) for moving a figure between units once the sampling behind it is settled.\n- [Silk spec comparison](/tools/silk-spec-comparison/) for setting one weight beside another before you ask a mill for a report.\n- [About the mill](/about/) for who cuts, conditions and weighs the pieces this page describes."
      }
    ],
    "references": [
      {
        "publisher": "ISO",
        "title": "ISO 3801:1977 Textiles, Woven fabrics, Determination of mass per unit length and mass per unit area",
        "year": "1977",
        "url": "https://www.iso.org/standard/9335.html"
      },
      {
        "publisher": "ASTM International",
        "title": "D3776/D3776M Standard Test Methods for Mass Per Unit Area (Weight) of Fabric",
        "year": "2013",
        "url": "https://dlvn.khoweb24h.com/uploads/files/ASTM%20D3776-09.pdf"
      },
      {
        "publisher": "ISO",
        "title": "ISO 139:2005 Textiles, Standard atmospheres for conditioning and testing",
        "year": "2005",
        "url": "https://www.iso.org/standard/35179.html"
      },
      {
        "publisher": "ASTM International",
        "title": "D1776/D1776M-20 Standard Practice for Conditioning and Testing Textiles",
        "year": "2020",
        "url": "https://www.astm.org/d1776_d1776m-20.html"
      },
      {
        "publisher": "CEN",
        "title": "EN 12127:1997 Textiles, Fabrics, Determination of mass per unit area using small samples",
        "year": "1997",
        "url": "https://standards.iteh.ai/catalog/standards/cen/6b6e76dd-ddd8-4271-84a1-d3f834f01b1d/en-12127-1997"
      },
      {
        "publisher": "ISO",
        "title": "ISO 22198:2006 Textiles, Fabrics, Determination of width and length",
        "year": "2006",
        "url": "https://www.iso.org/standard/40768.html"
      },
      {
        "publisher": "SAC",
        "title": "GB/T 4669-2008 Textiles, Woven fabrics, Determination of mass per unit length and mass per unit area",
        "year": "2008",
        "url": "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=531DE82A840614255846157F4369461C"
      },
      {
        "publisher": "SAC",
        "title": "GB/T 9994-2018 Textile materials, Official moisture regain",
        "year": "2018",
        "url": "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=BDBFD42F23E5CDEFF7CACC8F73FB3EA4&refer=outter"
      },
      {
        "publisher": "RISE Research Institutes of Sweden",
        "title": "Determination of mass per unit area using small samples",
        "year": "n.d.",
        "url": "https://www.ri.se/en/what-we-do/services/determination-of-mass-per-unit-area-using-small-samples"
      },
      {
        "publisher": "Nabi, G., Mohsin, A. H. and Shah, S. M. A",
        "title": "Regain characteristics of Pakistani silk",
        "year": "n.d.",
        "url": "https://pjsir.org/multidisciplinary-archive/Volume%2015%201972/Issue%206/Article%2021%20Vol%2015%20Issue%206%201972.pdf"
      },
      {
        "publisher": "ISO",
        "title": "ISO 5084:1996 Textiles, Determination of thickness of textiles and textile products",
        "year": "1996",
        "url": "https://www.iso.org/standard/23348.html"
      },
      {
        "publisher": "CEN",
        "title": "EN ISO 139:2005 Textiles, Standard atmospheres for conditioning and testing",
        "year": "2005",
        "url": "https://standards.iteh.ai/catalog/standards/sist/bc3ba05c-b1bf-4e50-9196-cca8b5bfe180/sist-en-iso-139-2005"
      }
    ]
  }
];
