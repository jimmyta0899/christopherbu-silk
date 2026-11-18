import dims from "./image-dims.json";

const MAP = dims as unknown as Record<string, [number, number]>;

/**
 * 取图片真实像素尺寸，用于给原生 <img> 补 width/height。
 *
 * 目的：图片没有 width/height 时浏览器在下载完成前不知道要留多高，
 * 正文图会把后续内容顶下去（CLS）。尺寸来自 scripts/gen-image-dims.mjs
 * 直接读文件头得到的真实值，不是手写的估计值。
 *
 * 查不到时返回空对象，调用方照常渲染，不编造尺寸。
 */
export function imgDims(src: string): { width?: number; height?: number } {
  const d = MAP[src];
  return d ? { width: d[0], height: d[1] } : {};
}
