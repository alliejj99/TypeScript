// 접근 제어자
class UserA {
  // public first: string = ''; // public 사용, 초기값 설정 가능
  // protected last: string = ''; // UserA에서만 사용가능
  // private age: number = 0; // 조회도 불가능합니다.
  constructor(public first: string, public last: string, public age: number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  getAge() {
    return `${this.first} ${this.last} is ${this.age}`;
  }
} // => 클래스 바디 영역

class UserB extends UserA {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`; // => private 제어로 조회가 불가능합니다.
  }
}

class UserC extends UserB {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`; // => private 제어로 조회가 불가능합니다.
  }
}

const userData = new UserA("Mizz", "Jang", 2);
console.log(userData.first);
console.log(userData.last); // => ptotexted 제어자로 인해 UserA 클래스 및 파생된 하위 클래스 내에서만 접근이 가능합니다.
console.log(userData.age);
