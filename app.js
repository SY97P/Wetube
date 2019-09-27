import express from "express";
import morgan from "morgan";
//앞의 morgan은 변수로 이름을 원하는대로 바꿀 수 있다.
import helmet from "helmet";
//helmet은 보안을 위한것, 쓰면 좋은거
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//다른 import들은 애초에 default이기 때문에 여기서 내맘대로 이름을 바꿔서 쓸 수 있지만
//userRouter는 router.js에서 export const userRouter로 선언했기 때문에 여기서 이렇게 app.js에서 사용해야한다.
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home , globalRouter);
app.use(routes.users , userRouter);
app.use(routes.videos , videoRouter);

export default app;
//누군가 내 파일을 불러올때(import) 
//app object(app.**)를 주겠다는 의미