/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
// 手机号校验
// export function validateMobile(str) {
//   // 第一位数字必须为1，第二位数字为3-9中的任意一个，\d是数字的意思，剩余9位是数字，测试str是否符合
//   return /^1[3-9]\d{9}$/.test(str)

// }
/**
 * 校验手机号
 * **/
 export function validMobile(str) {
  return /^1[3-9]\d{9}$/.test(str) // 校验手机号
}