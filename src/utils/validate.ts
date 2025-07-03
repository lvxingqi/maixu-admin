// utils/validate.ts

/** 校验是否是合法手机号（国内） */
function isValidPhone(phone: string): boolean {
  return /^1[3-9]\d{9}$/.test(phone);
}

export { isValidPhone }