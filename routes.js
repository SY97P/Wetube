// 각각의 라우터에 html을 따로 작성한다면 
// 하나의 진실된 라우터가 생기게 되지만
// 다른 곳에서 같은 html 경로를 사용할 수 있게 되기 때문에
// 미연에 방지하기 위해서 routes.js파일을 따로 만들었다.
/*
다시말해서 Router파일 세개에서 각각 URL(주소)를 선언하는 것보다
따로 router.js파일을 만들어서 상수에 맞는 주소를 선언해주는 것이 좋다.
*/

//GLOBAL
const HOME = "/";   //home
const SEARCH = "/search";
const JOIN = "/join";    //회원가입
const LOGIN = "/login";
const LOGOUT = "/logout";


//Users  : 사용자에 대한 것
const USERS = "/users";
const USER_DETAIL = "/:id"; 
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
// /users/1  : 나에게 사용자권환을 주었다

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";    //영상의 id
const EDIT_VIDEOS = "/:id/edit";    //동영상 수정
const DELETE_VIDEO = "/:id/delete"; 
//:id 이런 식으로 쓰여있는 것은 :다음이 변할 수 있다는 것을 의미한다.


const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: VIDEO_DETAIL,
    editVideo: EDIT_VIDEOS,
    deleteVideo: DELETE_VIDEO
};

export default routes;  //이제 어디에서도 사용할 수 있다.
