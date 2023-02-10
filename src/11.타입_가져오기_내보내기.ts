import { getFullName, User } from "./user";

const userData: User = {
  firstName: "nnn",
  lastName: "bbb",
  age: 123,
  isValid: true,
};

const fullName = getFullName(userData);

console.log(fullName);
console.log(userData.isValid);
