/**
 * 判断字符串是否是十六进制的颜色值
 * @param value
 */
export const order3 = function (value: string): boolean {
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value)
}

export const order4 = function (value: string): boolean {
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value)
}
export const order5 = function (value: string): boolean {
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value)
}

export default { order3, order4, order5 }
