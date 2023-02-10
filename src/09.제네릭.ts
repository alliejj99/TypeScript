// 함수

// interface obj {
//   x: number
// }

// type Arr = [number, number]

// function toArray(a:string, b:string):string[]
// function toArray(a:number, b:number):number[]
// function toArray(a:boolean, b:boolean):boolean[]
// function toArray(a:obj, b:obj):obj[]
// function toArray(a:Arr, b:Arr):Arr[]
function toArray<T>(a: T, b: T) {
  return [a, b];
}

console.log(toArray<string>("neo", 123));

// 클래스
class User<P> {
  constructor(public payload: P) {}
  getPayload() {
    return this.payload;
  }
}

interface UserAType {
  name: string;
  age: number;
  isValid: boolean;
}
interface UserBType {
  name: string;
  age: number;
  emails: string[];
}
const anne = new User<UserAType>({
  name: "Amy",
  age: 18,
  isValid: true,
});

const neo = new User<UserBType>({
  name: "Neo",
  age: 123,
  emails: ["neo@gmail.com"],
});

// 인터페이스, 제약 조건

interface MyData<T extends string | number[]> {
  name: string;
  value: T;
}

const dataA: MyData<string> = {
  name: "data A",
  value: "Hello World",
};

const dataB: MyData<number> = {
  name: "data B",
  value: 123,
};

const dataC: MyData<boolean> = {
  name: "data C",
  value: true,
};

const dataD: MyData<number[]> = {
  name: "data D",
  value: [1, 2, 3, 4],
};
