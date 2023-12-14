//inport checker
const checkPassword = require("./checker");

// first test
// expect is from jest(it takes the function we want to test, which in this case is checkPassword)
//toBe  refers to what comes back from the function being testnp

test("return false when given an empty string", () => {
  expect(checkPassword("")).toBe(false);
});
test("return false when password length is not 8 chars or more", () => {
  expect(checkPassword("1234567")).toBe(false);
});
test("return false when password doesnt contain a letter", () => {
  expect(checkPassword("123456789")).toBe(false);
});
test("return flase when the password doesnt contain a number", () => {
  expect(checkPassword("aaaaaaaaaaa")).toBe(false);
});
test("return false when the password doesn’t contain one uppercase letter", () => {
  expect(checkPassword("helloworld123")).toBe(false);
});
test("return false when the password doesn’t contain one symbol", () => {
  expect(checkPassword("helloworld123")).toBe(false);
});
test("return false when the password is longer than 20 characters", () => {
  expect(checkPassword("helloworld123")).toBe(false);
});
test("return true when the password is 8 chars or more, contains a letter, contains one uppercase letter, contains one lowercase letter, contains a number, contains a symbol, is not longer than 20 characters ", () => {
  expect(checkPassword("Helloworld123$")).toBe(true);
});
