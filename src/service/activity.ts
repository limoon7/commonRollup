/**
 * 判断字符串是否是十六进制的颜色值
 * @param value
 */
export const activity1 = function (value: string): boolean {
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value)
}

export const activity2 = function (value: string): boolean {
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value)
}

export default { activity1, activity2 }
