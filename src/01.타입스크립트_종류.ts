// 타입 종류

// 문자
let str: string;
let red: string = "red";
let green: string = "green";
let myColor: string = `My color is ${red}`;
let yourColor: string = `Your color is ${green}`;

// 숫자
let number: number;
let integer: number = 6;
let float: number = 3.14;
let infinity: number = Infinity;
let nan: number = NaN;

// 불린
let isBoolean: boolean;
let isDone: boolean = false; // or true

// Null / Undefined
let nul: null;
let und: undefined;
nul = null;
console.log(nul);
console.log(und);

// 배열
const fruits: string[] = ["Apple", "Banana", "Cherry"];
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const union: (string | number)[] = ["Apple", 1, 2, "Banana", 3];

// 객체
const obj: object = {};
const arr: object = [];
const func: object = function () {};

interface User {
  name: string;
  age: number;
  isValid: boolean;
}

const userA: User = {
  name: "A-Reum",
  age: 25,
  isValid: false,
};
const userB: User = {
  name: "Anne",
  age: 51,
  isValid: true,
};

// 함수
const add1: (x: number, y: number) => number = function (x, y) {
  return x + y;
};
const a: number = add1(1, 2);

const helloWorld = function (): void {
  console.log("hello world");
};
const h: void = helloWorld();

// Any
let hello2: any = "Hello world";
hello2 = 123;
hello2 = false;
hello2 = null;
hello2 = {};
hello2 = [];
hello2 = function () {};

// Unknown: 무엇인가를 알 수 없다.
const a1: any = 123;
const u1: unknown = 123;

const any1: any = a1;
const boo1: boolean = a1;
const num1: number = a1;
const arr1: string = a1;
const obj1: { x: string; y: number } = a1;

// Tuple
const tuple: [string, number, boolean] = ["a", 1, false];
const users: [number, string, boolean][] = [
  [1, "leo", true],
  [2, "anne", false],
];

// Void
function voidFunc(msg: string) {
  console.log(`Hello ${msg}`);
}
const hi: void = voidFunc("World");

// Never: 절대 발생하지 않을 값
const nev: number[] = [];
nev.push(3);

// Union
let unionType: string | number | boolean;
unionType = "Hello Type!";
unionType = 123;
unionType = false;

// Intersection
interface Users {
  name: string;
  age: number;
}

interface Validation {
  isValid: boolean;
}

const anne: Users & Validation = {
  name: "anne",
  age: 25,
  isValid: false,
};
