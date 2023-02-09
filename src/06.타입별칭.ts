type TypeA = string;
type TypeB = string | number | boolean;
type User =
  | {
      name: string;
      age: number;
      isValid: boolean;
    }
  | [string, number, boolean];

const userA: User = {
  name: "Leo",
  age: 85,
  isValid: true,
};

const userB: User = ["Eve", 38, false];

function someFunc(param: TypeB): TypeA {
  switch (typeof param) {
    case "string":
      return param.toUpperCase();
    case "number":
      return param.toFixed(2);
    default:
      return "Boolean!";
  }
}

//

type TypeUser = {
  name: string;
  age: number;
  isValid: boolean;
};

interface InterfaceUser {
  name: string;
  age: number;
  isValid: boolean;
}

const anne: ?? = {
  name: "Anne",
  age: "15",
  isValid: true,
};
