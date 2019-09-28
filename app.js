/* app.js파일 : application 관련 기능들을 담음
1. express를 import
2. express를 실행한 결과를 app상수로 선언
3. middleware 추가 (Parser들과 helmet, morgan ... )
 - cookieParser : cookie를 전달받아서 사용할 수 있도록 해주는 미들웨어
 - bodyParser   : 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어
                  아바타의 사진이나 비디오를 업로드할 때, 제목이나 댓글 같은 정보를 
                  form에 담아서 보낸다.
 - helmet       : application이 더 안전하도록 해주는 보안 미들웨어
 - morgan       : application에서 발생하는 모든일을 기록
*/

import express from "express";
import morgan from "morgan";
//앞의 morgan은 변수로 이름을 원하는대로 바꿀 수 있다.
import helmet from "helmet";
//helmet은 보안을 위한것, 쓰면 좋은거
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//다른 import들은 애초에 default이기 때문에 여기서 내맘대로 이름을 바꿔서 쓸 수 있지만
//userRouter는 router.js에서 export const userRouter로 선언했기 때문에 여기서 이렇게 app.js에서 사용해야한다.
import { localsMiddleware } from "./middlewares";   
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
//localsMiddleware가 routes를 미드웨어하고 있기 때문에 위쪽으로 올려주었다.

const app = express();

app.use(helmet());  //모든 항목에 적용하기 위해서 위로 올렸다
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use(routes.home , globalRouter);
app.use(routes.users , userRouter);
app.use(routes.videos , videoRouter);

export default app;
//누군가 내 파일을 불러올때(import) 
//app object(app.**)를 주겠다는 의미