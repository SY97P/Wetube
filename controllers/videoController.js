/* Controller.js
MVC의 V부분이다.
router의 모든 로직 (함수 선언)들을 여기에 있다.
그 템플릿들을 전역으로 쓸 수 있도록 여기서 처리해준다
*/
import { videos } from "../db";
import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
//pug파일을 사용하는 방법으로 res.send -> res.render("파일명")

export const search = (req, res) => {
  const {
    query : { term: searchingBy}
  } = req;
  res.render("search", {pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) => res.render("upload", {pageTitle: "Upload" });
export const postUpload = (req, res) => {
  const {
    body : { file, title, description }
  } = req;
  // To do: Upload and save video
  res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video" });
// 이런식으로 controller를 이용하여 globalRouter, userRouter, videoRouter파일에서의
// 함수로 선언된 모든 기능들을 이곳으로 따로 저장하여
// router파일에서는 컨트롤러에서 선언된 함수를 이용하여 사용하도록 한다