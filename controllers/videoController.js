/* Controller.js
MVC의 C부분이다.
router의 모든 로직 (함수 선언)들을 여기에 있다.
*/
export const home = (req, res) => res.render("Home");
//pug파일을 사용하는 방법으로 res.send -> res.render("파일명")
export const search = (req, res) => res.render("Search");

export const videos = (req, res) => res.render("Videos");
export const upload = (req, res) => res.render("Upload");
export const videoDetail = (req, res) => res.render("Video-Detail");
export const editVideo = (req, res) => res.render("Edit-Video");
export const deleteVideo = (req, res) => res.render("Delete-Video");
// 이런식으로 controller를 이용하여 globalRouter, userRouter, videoRouter파일에서의
// 함수로 선언된 모든 기능들을 이곳으로 따로 저장하여
// router파일에서는 컨트롤러에서 선언된 함수를 이용하여 사용하도록 한다