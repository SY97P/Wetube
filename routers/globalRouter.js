/* globalRouter.js 파일
 /home, /search, /join, /login, /logout 의 URL이 담겨있는 파일
*/

import express from "express";
import routes from "../routes"; //디렉토리 밖으로 나가야하니까 ..으로
import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);    
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
// 이렇게 controller를 사용하여 하는 것이 
// (req, res) => res.send()이런식으로 라우터의 기능을 함수로 모두 선언하는 것보다
// 나중에 코드가 복잡해졌을 때 수정하거나 오류를 찾기 쉽다

// =>에 대한 설명
/* 
 =>는 함수에서 무언가를 return 할때 쓰는 것이다
function alalal() {
    return true
}

alalal = () => {
    return true
}
*/
export default globalRouter;
