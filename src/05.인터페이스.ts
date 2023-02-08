// 기본
interface User {
  name: string;
  readonly age: number;
  isValid?: boolean;
}

const anne: User = {
  name: "Anne",
  age: 25,
  isValid: false,
};

const mizz: User = {
  name: "Mizz",
  age: 2,
};

// 함수 타입
interface GetName {
  (message: string): string;
}
interface GetUser {
  name: string;
  age: number;
  getName: GetName;
}

const aReum: GetUser = {
  name: "A-Reum",
  age: 25,
  getName(message: string) {
    console.log(message);
    return this.name;
  },
};

aReum.getName("Hello!");

// 인덱싱 가능 타입 - 인덱스 시그니처(Index Signature)
// 배열

interface Fruits {
  [item: number]: string;
}
const fruits: Fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

// 객체
interface IndexingUser {
  [key: string]: unknown;
  name: string;
  age: number;
}

const indexingUser: IndexingUser = {
  name: "Anne",
  age: 25,
};

indexingUser["isValid"] = true;
indexingUser["emails"] = ["anne@gmail.com", "test@gmail.com"];
console.log(indexingUser);

//
interface Payload {
  [key: string]: unknown;
}

function logValues(payload: Payload) {
  for (const key in payload) {
    console.log(payload[key]);
  }
}

interface payloadUser {
  [key: string]: unknown;
  name: string;
  age: number;
  isValid: boolean;
}

const payloadAnne: payloadUser = {
  name: "Anne",
  age: 25,
  isValid: false,
};

logValues(payloadAnne);

// 확장(상속)
interface UserA {
  name: string;
  age: number;
}
interface UserB extends UserA {
  isValid: boolean;
}

const extendUserA: UserA = {
  name: "Aream",
  age: 25,
  isValid: false,
};

const extendUserB: UserB = {
  name: "Anne",
  age: 14,
  isValid: true,
};
//
interface FullName {
  firstName: string;
  lastName: string;
}
interface FullName {
  middleName: string;
  lastName: boolean;
}

const fullName: FullName = {
  firstName: "Toms",
  middleName: "Sean",
  lastName: "Connery",
};
