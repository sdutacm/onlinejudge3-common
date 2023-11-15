export default function isWeakPassword(password: string) {
  // 检查密码长度: 最小长度为6
  if (password.length < 6) {
    return true;
  }

  // 检查字符组合: 需要存在字母、数字(、特殊字符)
  const hasChar = /[A-Za-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  // const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  if (!(hasChar && hasNumber)) {
    return true;
  }

  // 检查密码中是否包含常见密码
  const commonPasswords = [
    '000000',
    '111111',
    '11111111',
    '112233',
    '123123',
    '123321',
    '123456',
    '12345678',
    '654321',
    '666666',
    '888888',
    'abcdef',
    'abcabc',
    'abc123',
    'a1b2c3',
    'aaa111',
    '123qwe',
    'qwerty',
    'qweasd',
    'admin',
    'password',
    'p@ssword',
    'passwd',
    'iloveyou',
    '5201314',
    'asdfghjkl',
    '66666666',
    '88888888',
  ];
  for (const commonPassword of commonPasswords) {
    if (
      password.indexOf(commonPassword) !== -1 &&
      Math.abs(password.length - commonPassword.length) <= 3
    ) {
      return true;
    }
  }

  return false; // 密码强度符合要求
}
