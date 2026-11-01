// 品牌满屏印花背景 —— 忠实还原品牌服装面料上的经典植物印花：
// 西番莲花（粉红渐变尖瓣 + 蓝紫放射花冠须 + 黄色花心）+ 黄色卵形果实（整颗/剖面露籽）
// + 掌状深裂深绿叶片 + 棕褐藤蔓与螺旋卷须，铺于深墨绿底
// 用 <pattern> 平铺实现满屏背景

type Props = {
  className?: string;
  id?: string;
  /** 是否叠加一层深色遮罩（用于中央放文字时保证可读性） */
  overlay?: boolean;
};

/** 单朵西番莲花：粉红渐变尖瓣 + 蓝紫放射花冠须 + 黄心 */
function PassionFlower({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g transform={`translate(${cx} ${cy})`}>
      {/* 花冠须：蓝紫色放射细丝 */}
      <g stroke="#6b5fa8" strokeWidth="1.1" opacity="0.92">
        {Array.from({ length: 24 }, (_, i) => {
          const a = (i * 15 * Math.PI) / 180;
          const r1 = r * 0.36;
          const r2 = r * 1.0;
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
      {/* 5 枚尖瓣，粉红渐变（尖端深、基部浅，边缘微白） */}
      {[0, 72, 144, 216, 288].map((deg) => (
        <path
          key={deg}
          transform={`rotate(${deg})`}
          d={`M0 ${-r * 0.14} C ${r * 0.34} ${-r * 0.4}, ${r * 0.37} ${-r * 0.92}, 0 ${-r * 1.12} C ${-r * 0.37} ${-r * 0.92}, ${-r * 0.34} ${-r * 0.4}, 0 ${-r * 0.14} Z`}
          fill="#c65a78"
          stroke="#a63f5d"
          strokeWidth="0.6"
        />
      ))}
      {/* 中心黄心 + 短花丝 */}
      <circle cx="0" cy="0" r={r * 0.14} fill="#e7c04a" stroke="none" />
      <g stroke="#e7c04a" strokeWidth="1" opacity="0.95">
        <line x1="0" y1={-r * 0.14} x2="0" y2={-r * 0.32} />
        <line x1={r * 0.13} y1={-r * 0.05} x2={r * 0.29} y2={-r * 0.12} />
        <line x1={r * 0.13} y1={r * 0.05} x2={r * 0.29} y2={r * 0.12} />
        <line x1={-r * 0.13} y1={-r * 0.05} x2={-r * 0.29} y2={-r * 0.12} />
        <line x1={-r * 0.13} y1={r * 0.05} x2={-r * 0.29} y2={r * 0.12} />
      </g>
    </g>
  );
}

/** 黄色卵形果实，带褐色果柄；halved=true 剖面露籽 */
function Fruit({ cx, cy, r, halved = false }: { cx: number; cy: number; r: number; halved?: boolean }) {
  const body = `M ${cx} ${cy - r} C ${cx + r * 0.15} ${cy - r * 0.7}, ${cx + r * 0.16} ${cy - r * 0.2}, ${cx} ${cy + r * 0.42} C ${cx - r * 0.16} ${cy - r * 0.2}, ${cx - r * 0.15} ${cy - r * 0.7}, ${cx} ${cy - r} Z`;
  const stem = (
    <path
      d={`M ${cx} ${cy - r} C ${cx + r * 0.3} ${cy - r * 1.3}, ${cx + r * 0.12} ${cy - r * 1.7}, ${cx + r * 0.4} ${cy - r * 1.9}`}
      fill="none"
      stroke="#7a5a2e"
      strokeWidth="1.2"
    />
  );
  if (!halved) {
    return (
      <g>
        <path d={body} fill="#e6b63f" stroke="#c49a2e" strokeWidth="0.7" />
        {stem}
        <ellipse cx={cx - r * 0.34} cy={cy - r * 0.28} rx={r * 0.16} ry={r * 0.3} fill="#f3d97e" opacity="0.75" />
      </g>
    );
  }
  return (
    <g>
      <path d={body} fill="#e6b63f" stroke="#c49a2e" strokeWidth="0.7" />
      <path
        d={`M ${cx} ${cy - r * 0.28} C ${cx + r * 0.09} ${cy - r * 0.14}, ${cx + r * 0.1} ${cy + r * 0.05}, ${cx} ${cy + r * 0.22} C ${cx - r * 0.1} ${cy + r * 0.05}, ${cx - r * 0.09} ${cy - r * 0.14}, ${cx} ${cy - r * 0.28} Z`}
        fill="#f3ead6"
        stroke="none"
      />
      <g fill="#8a6a35">
        <ellipse cx={cx - r * 0.22} cy={cy - r * 0.06} rx="1.2" ry="1.6" />
        <ellipse cx={cx + r * 0.18} cy={cy} rx="1.2" ry="1.6" />
        <ellipse cx={cx} cy={cy + r * 0.12} rx="1.2" ry="1.6" />
      </g>
    </g>
  );
}

/** 掌状深裂叶片（西番莲叶） */
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

export function PrintBackground({ className = "", id = "print", overlay = false }: Props) {
  return (
    <div aria-hidden="true" className={`absolute inset-0 overflow-hidden bg-jade-deep ${className}`}>
      <svg className="h-full w-full" role="presentation" focusable="false">
        <defs>
          <pattern id={id} width="360" height="360" patternUnits="userSpaceOnUse">
            {/* 藤蔓与卷须 */}
            <g fill="none" stroke="#7a5a2e" strokeWidth="1.3">
              <path d="M-10 180 C 60 160, 120 190, 180 170 C 250 148, 320 180, 370 160" opacity="0.7" />
              <path d="M-10 340 C 60 320, 150 350, 220 330 C 300 308, 340 340, 370 330" opacity="0.6" />
              <path d="M120 90 q 10 -20 -2 -30 q 20 2 16 22 q -2 14 -16 17" opacity="0.7" />
              <path d="M300 240 q 9 -16 0 -25 q 18 3 14 21 q -3 13 -16 14" opacity="0.7" />
            </g>

            {/* 花 */}
            <PassionFlower cx={90} cy={90} r={52} />
            <PassionFlower cx={290} cy={270} r={40} />
            <PassionFlower cx={300} cy={80} r={30} />
            <PassionFlower cx={70} cy={300} r={34} />

            {/* 果实 */}
            <Fruit cx={200} cy={90} r={18} />
            <Fruit cx={150} cy={250} r={16} halved />
            <Fruit cx={340} cy={180} r={15} />

            {/* 叶 */}
            <Leaf cx={180} cy={150} r={40} rot={-15} />
            <Leaf cx={40} cy={200} r={34} rot={30} />
            <Leaf cx={260} cy={30} r={30} rot={150} />
            <Leaf cx={230} cy={340} r={36} rot={-40} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
      {overlay && <div className="absolute inset-0 bg-jade-deep/60" />}
    </div>
  );
}
