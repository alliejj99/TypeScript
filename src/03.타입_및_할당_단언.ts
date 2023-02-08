// =============== 타입 단언 ===============
// ‘단언’ - 주저하지 아니하고 딱 잘라 말함.

// > **단언 키워드 - as**
// > **Non-null 단언 연산자 - !**

// 1 요소를 찾지 못하는 경우
const el = document.querySelector("body");
el.textContent = "Hello World?!";
// ->  null값이 아닌 html 코드에 있다고 딱 잘라 말함.
const el = document.querySelector("body") as HTMLBodyElement;

// !
const el = document.querySelector("body");
el!.textContent = "Hello World?!";

// element가 없을때
if (el) {
  el.textContent = "Hello World?!";
}

// 2 toFixed는 숫자 데이터만 할당할 수 있으므로
// null이나 undefined에서는 사용할 수 없어 에러를 반환합니다.
function getNumber(x: number | null | undefined) {
  return Number(x.toFixed(2));
}
// -> 다음과 같이 설정 하여 코드상에서의 문제는 없으나
// 출력할때 null이나 undefined가 들어오면
// 여전히 에러를 반환합니다.
function getNumber(x: number | null | undefined) {
  return Number((x as number).toFixed(2));
}

// !
function getNumber(x: number | null | undefined) {
  return Number(x!.toFixed(2));
}

//
function getNumber(x: number | null | undefined) {
  if (x) {
    return Number(x.toFixed(2));
  }
}

getNumber(3.1415926535);
getNumber(null);

// 3 매개변수 x는 문자데이터나 숫자데이터가 들어올 수 있습니다.
// 하지만 toFixed 매소드에는 숫자데이터만 할당 가능하며,
// toUpperCase 메소드는 문자 데이터만 할당 할 수 있습니다.
// 조건문을 추가하여 로직에는 문제가 없지만 타입 스크립트에서는 에러를 반환합니다.
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number(x.toFixed(2));
  }
  return x.toUpperCase();
}
getValue("Anne Hi!", false); // 'ANNE HI!'
getValue(3.1415926535, true); // 3.14

// -> 따라서 as를 사용하여 x의 값이 숫자 데이터인지 문자 데이터인지
// 단언을 해주어 문제를 해결 할 수 있습니다.
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number((x as number).toFixed(2));
  }
  return (x as string).toUpperCase();
}
getValue("Anne Hi!", false); // 'ANNE HI!'
getValue(3.1415926535, true); // 3.14

//!
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number(x.toFixed(2));
  }
  return x.toUpperCase();
}
getValue("Anne Hi!", false); // 'ANNE HI!'
getValue(3.1415926535, true); // 3.14

// =============== 할당 단언 ===============

// let numAC: number
let numAC!: number;
console.log(numAC);
numAC = 123;
