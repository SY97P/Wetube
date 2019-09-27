/*
init.js 파일은 application 관련코드를 담은 app.js파일을 
import하여서 사용한다.
*/

import app from "./app";

const PORT = 4000;

const handleListening = () => 
    console.log(`※ Listening on: http://localhost:${PORT}`);


app.listen(PORT, handleListening);