interface Config {
  url: string;
}

// 모듈 선언
// 호출 시그니처, 타입만 설명해주는 것 (구현할 로직을 작성하는 게 아님)
declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}