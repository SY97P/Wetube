/* Controller.js
MVC의 C부분이다.
router의 모든 로직 (함수 선언)들을 여기에 있다.
*/
export const home = (req, res) => res.send("Home");
export const search = (req, res) => res.send("Search");

export const videos = (req, res) => res.send("Videos");
export const upload = (req, res) => res.send("Upload");
export const videoDetail = (req, res) => res.send("Video-Detail");
export const editVideo = (req, res) => res.send("Edit-Video");
export const deleteVideo = (req, res) => res.send("Delete-Video");
// 이런식으로 controller를 이용하여 globalRouter, userRouter, videoRouter파일에서의
// 함수로 선언된 모든 기능들을 이곳으로 따로 저장하여
// router파일에서는 컨트롤러에서 선언된 함수를 이용하여 사용하도록 한다