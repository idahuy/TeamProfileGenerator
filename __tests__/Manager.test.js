const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Bob", 1, "test@test.com", testValue);
  expect(e.officeNumber).toEqual(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const returnValue = "Manager"
  const e = new Manager("Bob", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(returnValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
