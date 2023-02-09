// 명시적 this 타입
interface Cat {
  name: string;
  age: number;
}

const cat: Cat = {
  name: "Lucy",
  age: 3,
};

function hello(this: Cat, message: string) {
  console.log(`Hello ${this.name}, ${message}`);
}

hello.call(cat, "Cats!");

// 오버로딩(Overloading)

function add1(a: string, b: string) {
  return a + b;
}
function add2(a: number, b: number) {
  return a + b;
}
add1("hello", "world!");
add2(1, 2);
add1("hello ", 2);
add2("hello ", 2);

//
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any) {
  return a + b;
}

add("hello", "world!");
add(1, 2);
add("hello ", 2);
add("hello ", 2);
