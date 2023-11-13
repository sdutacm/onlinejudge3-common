export default function isWeakPassword(password: string) {
  // 检查密码长度: 最小长度为6
  if (password.length < 6) {
    return true;
  }

  // 检查字符组合: 需要存在字母、数字、特殊字符
  const hasChar = /[A-Za-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  if (!(hasChar && hasNumber && hasSpecialChar)) {
    return true;
  }

  // 不允许出现三个以上的连续字母或者数字
  const hasThreeConsecutiveChars = /([A-Za-z0-9])\1{2,}/.test(password);

  if (hasThreeConsecutiveChars) {
    return true;
  }

  return false; // 密码强度符合要求
}
