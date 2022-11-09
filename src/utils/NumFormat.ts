/**
 * 将数字转换成带单位的
 * @param {number} num
 * @return {string} 带有单位的字符串
 * @example
 *  10000 => 1万
 */
export function numWithUnit(num: number, fractionDigits = 0): string {
  if (num >= 10000 * 10000) {
    return (num / 100000000).toFixed(fractionDigits) + '亿';
  }

  if (num >= 10000) {
    return (num / 10000).toFixed(fractionDigits) + '万';
  }

  return num.toString();
}
