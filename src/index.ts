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
import { init, exit } from 'myPackage';

init({
  url: "https://www.test.com"
})

exit(1)

localStorage.getItem
