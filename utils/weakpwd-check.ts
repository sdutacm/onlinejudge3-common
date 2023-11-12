export default function isWeakPassword(password: string) {
  // 检查密码长度
  if (password.length < 8) {
    return true;
  }

  // 检查字符组合
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  if (!(hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar)) {
    return true;
  }

  // 检查字典匹配
  const commonPasswords = ['123', 'abc']; // 常见密码列表
  if (commonPasswords.includes(password.toLowerCase())) {
    return true;
  }

  // 检查重复字符
  if (/(\w)\1{2,}/.test(password)) {
    return true;
  }

  return false; // 密码强度符合要求
}
