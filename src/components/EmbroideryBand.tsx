// 品牌纹样带 —— 花型直接提取自品牌服装上的经典植物印花：
// 西番莲花（passion flower）+ 圆形果实 + 阔叶 + 卷曲藤须
// 以金色线绘呈现于墨绿底上，呼应绿金主色调

type Props = {
  className?: string;
  /** pattern id 需要全页唯一（同一页面多次使用时传不同值） */
  id?: string;
  /** 是否在纹样上下加金色细边 */
  framed?: boolean;
};

/** 单朵西番莲花：5 枚尖瓣 + 放射状花冠丝 + 中心花蕊 */
function PassionFlower({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <g transform={`translate(${cx} ${cy})`}>
      {/* 花冠丝：外圈放射细线（印花中最具识别度的部分） */}
      <g stroke="#e6c57e" strokeWidth="0.9" opacity="0.85">
        {Array.from({ length: 20 }, (_, i) => {
          const a = (i * 18 * Math.PI) / 180;
          const r1 = r * 0.42;
          const r2 = r * 0.88;
          return (
            <line
              key={i}
              x1={Math.cos(a) * r1}
              y1={Math.sin(a) * r1}
              x2={Math.cos(a) * r2}
              y2={Math.sin(a) * r2}
            />
          );
        })}
      </g>
      {/* 5 枚尖瓣 */}
      <g fill="none" stroke="#e6c57e" strokeWidth="1.3">
        {petals.map((deg) => (
          <path
            key={deg}
            transform={`rotate(${deg})`}
            d={`M0 ${-r * 0.34} C ${r * 0.3} ${-r * 0.5}, ${r * 0.32} ${-r * 0.86}, 0 ${-r} C ${-r * 0.32} ${-r * 0.86}, ${-r * 0.3} ${-r * 0.5}, 0 ${-r * 0.34} Z`}
          />
        ))}
      </g>
      {/* 中心花蕊 */}
      <circle cx="0" cy="0" r={r * 0.16} fill="#e6c57e" stroke="none" />
      <g stroke="#e6c57e" strokeWidth="1" opacity="0.9">
        <line x1="0" y1={-r * 0.16} x2="0" y2={-r * 0.34} />
        <line x1={r * 0.15} y1={-r * 0.06} x2={r * 0.31} y2={-r * 0.13} />
        <line x1={r * 0.15} y1={r * 0.06} x2={r * 0.31} y2={r * 0.13} />
      </g>
    </g>
  );
}

/** 圆形果实（印花里的黄色小球果） */
function Fruit({ cx, cy, r, halved = false }: { cx: number; cy: number; r: number; halved?: boolean }) {
  if (!halved) {
    return (
      <g>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#e6c57e" strokeWidth="1.2" />
        <circle cx={cx - r * 0.3} cy={cy - r * 0.3} r={r * 0.16} fill="#e6c57e" stroke="none" opacity="0.7" />
      </g>
    );
  }
  // 对半切：外圈 + 内果肉圈 + 中心籽
  return (
    <g fill="none" stroke="#e6c57e">
      <circle cx={cx} cy={cy} r={r} strokeWidth="1.2" />
      <circle cx={cx} cy={cy} r={r * 0.62} strokeWidth="0.8" opacity="0.8" />
      <circle cx={cx} cy={cy} r={r * 0.18} strokeWidth="0.8" opacity="0.9" />
    </g>
  );
}

export function EmbroideryBand({ className = "", id = "embroidery", framed = true }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`${className} bg-jade-deep ${framed ? "border-y border-gold-bright/50" : ""}`}
    >
      <svg className="block w-full" height="120" role="presentation" focusable="false">
        <defs>
          <pattern id={id} width="240" height="120" patternUnits="userSpaceOnUse">
            {/* 贯穿藤蔓 */}
            <g fill="none" stroke="#e6c57e" strokeWidth="1">
              <path d="M-10 92 C 40 78, 90 96, 130 84 C 175 71, 210 86, 250 74" opacity="0.75" />
              {/* 卷曲藤须（印花标志性元素） */}
              <path d="M52 86 q 6 -14 -2 -22 q 14 2 12 16 q -2 10 -12 12" opacity="0.7" />
              <path d="M188 80 q 7 -13 0 -21 q 14 3 11 17 q -3 10 -13 11" opacity="0.7" />
            </g>

            {/* 西番莲花：一大一小 */}
            <PassionFlower cx={60} cy={46} r={26} />
            <PassionFlower cx={178} cy={56} r={17} />

            {/* 果实：整颗 + 对半切 */}
            <Fruit cx={124} cy={40} r={9} />
            <Fruit cx={222} cy={92} r={8} halved />
            <Fruit cx={22} cy={98} r={7} />

            {/* 阔叶（墨绿填充 + 金边，呼应印花叶片） */}
            <g fill="#2c5a45" stroke="#e6c57e" strokeWidth="0.9">
              <path d="M96 100 q 16 -14 34 -8 q -14 16 -34 8 z" />
              <path d="M148 22 q 15 -12 32 -6 q -13 15 -32 6 z" />
              <path d="M8 30 q 14 -11 30 -5 q -12 14 -30 5 z" />
            </g>
            {/* 叶脉 */}
            <g stroke="#e6c57e" strokeWidth="0.7" opacity="0.8" fill="none">
              <path d="M100 97 q 14 -8 26 -6" />
              <path d="M152 20 q 13 -7 24 -4" />
              <path d="M12 28 q 12 -6 22 -3" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="120" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}
