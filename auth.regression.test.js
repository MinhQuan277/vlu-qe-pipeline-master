const { login } = require("./auth");

describe("Regression Tests - Login", () => {
  test("Sai mật khẩu", () => {
    expect(login("admin", "wrongpass")).toBe(false);
  });

  test("Username rỗng", () => {
    expect(login("", "123")).toBe(false);
  });

  test("Mật khẩu rỗng", () => {
    expect(login("admin", "")).toBe(false);
  });

  test("Mật khẩu chứa ký tự đặc biệt (sai)", () => {
    expect(login("admin", "123@#$")).toBe(false);
  });

  test("Tài khoản bị khóa", () => {
    expect(login("lockeduser", "123")).toBe(false);
  });

  test("Username không tồn tại", () => {
    expect(login("unknown", "123")).toBe(false);
  });
});
