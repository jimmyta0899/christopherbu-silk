// 品牌影响力背书数据（红毯/媒体报道）
// 原则：只写有可查证来源的；用"媒体报道"客观口径，不虚构不夸大不暗示代言

export type PressItem = {
  name: string; // 人物名
  role: string; // 身份
  event: string; // 事件
  description: string; // 客观描述
  sources: string[]; // 报道来源
  verified: boolean; // 是否已核实来源
  year: string;
};

export const pressItems: PressItem[] = [
  {
    name: "Paz Vega",
    role: "Spanish actress",
    event: "90th Academy Awards (Oscars) red carpet, 2018",
    description:
      "Wore a Christopher Bu gown on the 2018 Oscars red carpet: the Snow Plum Blossom dress from the 'Forbidden City'-inspired couture series. It was named among the night's most gorgeous looks by Western media.",
    sources: ["Global Times", "Daily Mail", "Vogue China", "Wonderwall"],
    verified: true,
    year: "2018",
  },
  {
    name: "Katy Perry",
    role: "American singer",
    event: "Studio visit & custom piece, 2014–2017",
    description:
      "Visited the Christopher Bu studio in 2014 and later commissioned a custom coat for her 2017 single 'Chained to the Rhythm'.",
    sources: ["Global Times (English)"],
    verified: true,
    year: "2017",
  },
];

// 说明：其他明星背书（如 Emma Roberts、Cardi B、Gigi Hadid、Dita Von Teese）
// 待提供明确标注 Christopher Bu 的可靠报道来源后，再补充进此列表。
