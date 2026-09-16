// Cập nhật: bổ sung ghi chú kiểm tra tài khoản bị khóa - Feature update-login
function login(username, password) {
  const users = {
    admin: { password: "9999", locked: false },
    lockeduser: { password: "123", locked: true },
  };

  if (!username || !password) return false;

  const user = users[username];
  if (!user) return false;
  if (user.locked) return false;

  return user.password === password;
}

module.exports = { login };
