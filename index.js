import express from "express";
import morgan from "morgan";
//앞의 morgan은 변수로 이름을 원하는대로 바꿀 수 있다.
import helmet from "helmet";
//helmet은 보안을 위한것, 쓰면 좋은거
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () =>
    console.log(`Listening on: http://localhost:${PORT}`); 

const handleHome = (req, res) => res.send("Hello from ass");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);


app.listen(PORT, handleListening);