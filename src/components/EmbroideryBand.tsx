// 绿金刺绣纹样带 —— 灵感源自紫禁城礼服的绿金刺绣与品牌经典植物印花
// 金色缠枝花卉铺在深墨绿底上，作为品牌识别装饰元素

type Props = {
  className?: string;
  /** pattern id 需要全页唯一（同一页面多次使用时传不同值） */
  id?: string;
  /** 是否在纹样上下加金色细边 */
  framed?: boolean;
};

export function EmbroideryBand({ className = "", id = "embroidery", framed = true }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`${className} bg-jade-deep ${framed ? "border-y border-gold/50" : ""}`}
    >
      <svg className="block w-full" height="110" role="presentation" focusable="false">
        <defs>
          <pattern id={id} width="200" height="110" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="#c9a86a" strokeWidth="1.1">
              {/* 缠枝主藤 */}
              <path d="M0 78 C 34 52, 66 96, 100 74 C 134 52, 166 92, 200 68" opacity="0.9" />
              {/* 上部辅藤 */}
              <path d="M0 30 C 50 48, 96 14, 140 38 C 165 51, 182 34, 200 40" opacity="0.55" />
              {/* 花朵（中心 100,74） */}
              <g opacity="0.95">
                <path d="M100 58 c 7 5, 7 15, 0 19 c -7 -4, -7 -14, 0 -19 z" />
                <g transform="rotate(72 100 74)">
                  <path d="M100 58 c 7 5, 7 15, 0 19 c -7 -4, -7 -14, 0 -19 z" />
                </g>
                <g transform="rotate(144 100 74)">
                  <path d="M100 58 c 7 5, 7 15, 0 19 c -7 -4, -7 -14, 0 -19 z" />
                </g>
                <g transform="rotate(216 100 74)">
                  <path d="M100 58 c 7 5, 7 15, 0 19 c -7 -4, -7 -14, 0 -19 z" />
                </g>
                <g transform="rotate(288 100 74)">
                  <path d="M100 58 c 7 5, 7 15, 0 19 c -7 -4, -7 -14, 0 -19 z" />
                </g>
                <circle cx="100" cy="74" r="2.6" fill="#c9a86a" stroke="none" />
              </g>
              {/* 侧花苞 */}
              <g opacity="0.8">
                <path d="M38 60 c 5 3, 5 10, 0 13 c -5 -3, -5 -10, 0 -13 z" />
                <path d="M162 56 c 5 3, 5 10, 0 13 c -5 -3, -5 -10, 0 -13 z" />
              </g>
              {/* 叶片（墨绿填充 + 金边） */}
              <g fill="#1d3a2f">
                <path d="M22 66 q 12 -16 26 -12 q -9 15 -26 12 z" />
                <path d="M64 92 q 14 -12 27 -5 q -12 13 -27 5 z" />
                <path d="M126 90 q 14 -12 27 -4 q -13 13 -27 4 z" />
                <path d="M150 32 q 13 -13 26 -8 q -10 14 -26 8 z" />
              </g>
              {/* 卷须 */}
              <path d="M56 46 q 8 -10 4 -18 q 10 6 6 18" opacity="0.7" />
              <path d="M176 84 q 9 -8 6 -17 q 10 8 4 17" opacity="0.7" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="110" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}
