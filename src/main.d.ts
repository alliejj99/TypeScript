declare module "lodash" {
  interface Lodash {
    camelCase: (str: string) => string;
    snakelCase: (str: string) => string;
    kebablCase: (str: string) => string;
  }
  const _: Lodash;
  export default _;
}

// declare를 사용해서 모듈을 선언한다.
