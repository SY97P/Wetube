import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
    console.log(`Listening on: http://localhost:${PORT}`); 

const handleHome = (req, res) => res.send("Hello from ass");

const handleProfile = (req, res) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {
    console.log("Between");
    next();
};  //log에 뭔가를 남기고 싶다면 middleware을 사용하면 된다.

app.use(betweenHome);
//middleware을 다 처리한 후에 route를 처리해야한다.
//무조건 코드의 위치에 따라 위에서 아래 순으로 실행
//지금은 모든 route에 적용된다.

app.get("/", betweenHome, handleHome);

app.get("/profile", handleProfile);


app.listen(PORT, handleListening);