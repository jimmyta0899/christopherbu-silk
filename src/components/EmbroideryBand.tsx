// 品牌纹样带 —— 花型与配色直接提取自品牌服装面料上的经典植物印花：
// 西番莲花（粉红渐变尖瓣 + 蓝紫放射花冠须 + 黄心）+ 黄色卵形果实（含剖面露籽）
// + 掌状深裂的深绿叶片 + 棕褐藤蔓与螺旋卷须
// 铺在深墨绿底上，作为品牌识别装饰元素

type Props = {
  className?: string;
  /** pattern id 需要全页唯一（同一页面多次使用时传不同值） */
  id?: string;
  /** 是否在纹样上下加金色细边 */
  framed?: boolean;
};

/** 单朵西番莲花：5+ 枚尖瓣（粉红渐变）+ 蓝紫放射花冠须 + 黄色花心 */
function PassionFlower({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g transform={`translate(${cx} ${cy})`}>
      {/* 花冠须：蓝紫色放射细丝（印花最典型特征） */}
      <g stroke="#6b5fa8" strokeWidth="1" opacity="0.9">
        {Array.from({ length: 24 }, (_, i) => {
          const a = (i * 15 * Math.PI) / 180;
          const r1 = r * 0.38;
          const r2 = r * 0.95;
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
      {/* 5 枚尖瓣：粉红（尖端深、基部浅） */}
      {[0, 72, 144, 216, 288].map((deg) => (
        <path
          key={deg}
          transform={`rotate(${deg})`}
          d={`M0 ${-r * 0.16} C ${r * 0.34} ${-r * 0.42}, ${r * 0.36} ${-r * 0.9}, 0 ${-r * 1.08} C ${-r * 0.36} ${-r * 0.9}, ${-r * 0.34} ${-r * 0.42}, 0 ${-r * 0.16} Z`}
          fill="#c65a78"
          stroke="#9d3f5c"
          strokeWidth="0.6"
        />
      ))}
      {/* 中心黄色花心 + 短花丝 */}
      <circle cx="0" cy="0" r={r * 0.14} fill="#e7c04a" stroke="none" />
      <g stroke="#e7c04a" strokeWidth="1" opacity="0.95">
        <line x1="0" y1={-r * 0.14} x2="0" y2={-r * 0.34} />
        <line x1={r * 0.13} y1={-r * 0.05} x2={r * 0.29} y2={-r * 0.12} />
        <line x1={r * 0.13} y1={r * 0.05} x2={r * 0.29} y2={r * 0.12} />
        <line x1={-r * 0.13} y1={-r * 0.05} x2={-r * 0.29} y2={-r * 0.12} />
        <line x1={-r * 0.13} y1={r * 0.05} x2={-r * 0.29} y2={r * 0.12} />
      </g>
    </g>
  );
}

/** 黄色卵形果实，带弯曲果柄；halved=true 画剖面露籽 */
function Fruit({
  cx,
  cy,
  r,
  halved = false,
}: {
  cx: number;
  cy: number;
  r: number;
  halved?: boolean;
}) {
  const body = `M ${cx} ${cy - r} C ${cx + r * 0.14} ${cy - r * 0.7}, ${cx + r * 0.16} ${cy - r * 0.2}, ${cx} ${cy + r * 0.4} C ${cx - r * 0.16} ${cy - r * 0.2}, ${cx - r * 0.14} ${cy - r * 0.7}, ${cx} ${cy - r} Z`;
  if (!halved) {
    return (
      <g>
        <path d={body} fill="#e6b63f" stroke="#c49a2e" strokeWidth="0.7" />
        {/* 果柄 */}
        <path
          d={`M ${cx} ${cy - r} C ${cx + r * 0.3} ${cy - r * 1.3}, ${cx + r * 0.12} ${cy - r * 1.7}, ${cx + r * 0.4} ${cy - r * 1.9}`}
          fill="none"
          stroke="#7a5a2e"
          strokeWidth="1.1"
        />
        {/* 高光 */}
        <ellipse cx={cx - r * 0.34} cy={cy - r * 0.28} rx={r * 0.16} ry={r * 0.3} fill="#f3d97e" opacity="0.75" />
      </g>
    );
  }
  return (
    <g>
      <path d={body} fill="#e6b63f" stroke="#c49a2e" strokeWidth="0.7" />
      <path
        d={`M ${cx} ${cy - r * 0.3} C ${cx + r * 0.09} ${cy - r * 0.15}, ${cx + r * 0.1} ${cy + r * 0.05}, ${cx} ${cy + r * 0.22} C ${cx - r * 0.1} ${cy + r * 0.05}, ${cx - r * 0.09} ${cy - r * 0.15}, ${cx} ${cy - r * 0.3} Z`}
        fill="#f3ead6"
        stroke="none"
      />
      <g fill="#8a6a35">
        <ellipse cx={cx - r * 0.22} cy={cy - r * 0.08} rx="1.1" ry="1.5" />
        <ellipse cx={cx + r * 0.18} cy={cy - r * 0.02} rx="1.1" ry="1.5" />
        <ellipse cx={cx} cy={cy + r * 0.1} rx="1.1" ry="1.5" />
      </g>
    </g>
  );
}

/** 掌状深裂叶片（西番莲叶，深绿 + 浅绿叶脉） */
function Leaf({ cx, cy, r, rot = 0 }: { cx: number; cy: number; r: number; rot?: number }) {
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rot})`}>
      <path
        d={`M0 ${-r} C ${r * 0.5} ${-r * 0.7}, ${r * 0.62} ${-r * 0.1}, ${r * 0.34} ${r * 0.15} C ${r * 0.52} ${-r * 0.02}, ${r * 0.42} ${-r * 0.5}, 0 ${-r * 0.6} C ${-r * 0.42} ${-r * 0.5}, ${-r * 0.52} ${-r * 0.02}, ${-r * 0.34} ${r * 0.15} C ${-r * 0.62} ${-r * 0.1}, ${-r * 0.5} ${-r * 0.7}, 0 ${-r} Z`}
        fill="#2f5c44"
        stroke="#1e4032"
        strokeWidth="0.6"
      />
      <g stroke="#7fb39a" strokeWidth="0.8" opacity="0.8" fill="none">
        <path d={`M0 ${-r} L0 ${r * 0.12}`} />
        <path d={`M0 ${-r * 0.5} L${r * 0.3} ${r * 0.05}`} />
        <path d={`M0 ${-r * 0.5} L${-r * 0.3} ${r * 0.05}`} />
      </g>
    </g>
  );
}

export function EmbroideryBand({ className = "", id = "embroidery", framed = true }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`${className} bg-jade-deep ${framed ? "border-y border-gold-bright/50" : ""}`}
    >
      <svg className="block w-full" height="150" role="presentation" focusable="false">
        <defs>
          <pattern id={id} width="300" height="150" patternUnits="userSpaceOnUse">
            {/* 棕褐藤蔓（连接各元素） */}
            <g fill="none" stroke="#7a5a2e" strokeWidth="1.3">
              <path d="M-10 118 C 40 104, 90 120, 130 108 C 175 95, 210 110, 250 98" opacity="0.8" />
              {/* 螺旋卷须 */}
              <path d="M60 110 q 8 -16 -2 -24 q 16 2 13 18 q -2 12 -14 14" opacity="0.7" />
              <path d="M200 102 q 8 -14 0 -22 q 16 3 12 19 q -3 11 -14 12" opacity="0.7" />
              <path d="M140 52 q 7 -13 0 -20 q 14 3 11 17 q -3 10 -13 11" opacity="0.7" />
            </g>

            {/* 西番莲花：一大两小 */}
            <PassionFlower cx={72} cy={58} r={34} />
            <PassionFlower cx={210} cy={44} r={22} />
            <PassionFlower cx={252} cy={118} r={16} />

            {/* 果实：整颗 + 剖面 */}
            <Fruit cx={150} cy={30} r={13} />
            <Fruit cx={28} cy={128} r={12} halved />
            <Fruit cx={118} cy={126} r={10} />

            {/* 掌状深裂叶片 */}
            <Leaf cx={98} cy={96} r={30} rot={-18} />
            <Leaf cx={180} cy={124} r={22} rot={22} />
            <Leaf cx={246} cy={74} r={18} rot={150} />
            <Leaf cx={16} cy={66} r={20} rot={40} />
          </pattern>
        </defs>
        <rect width="100%" height="150" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}
