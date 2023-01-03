// const hello = () => "hi";

// class Block {
//   constructor(
//     private data: string;
//   ) { }
//   static hello() {
//     return "hi";
//   }
// }

// node 모듈 패키지에서 import 해서 가져다 쓰듯이 작성
// import { init, exit } from 'myPackage';

// 파일을 불러오는 방식으로 작성(js 파일을 불러옴)
import { init, exit } from "./myPackage";

init();
