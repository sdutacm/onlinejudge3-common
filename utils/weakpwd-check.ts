// 弱密码检查工具
export default class WeakPasswordChecker {
  // 检查密码长度是否符合要求: 最小长度为6
  static checkLength(password: string) {
    return password.length >= 6;
  }

  // 检查密码字符组合是否符合要求: 需要存在字母、数字
  static checkCharGroup(password: string) {
    const hasChar = /[A-Za-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return hasChar && hasNumber;
  }

  // 检查密码中是否包含常见密码, 且长度差值不超过3
  static checkCommonPassword(password: string) {
    for (const commonPassword of commonPasswords) {
      if (password.indexOf(commonPassword) !== -1 && password.length - commonPassword.length <= 3) {
        return false;
      }
    }
    return true;
  }

  // 检查密码强度是否符合要求
  static isWeak(password: string) {
    return (
      !WeakPasswordChecker.checkLength(password) ||
      !WeakPasswordChecker.checkCharGroup(password) ||
      !WeakPasswordChecker.checkCommonPassword(password)
    );
  }
}

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
