/* userRouter.js 파일
 globalRouter 파일과 마찬가지로
 /user/ 의 주소가 담겨있다. 진짜 주소는 router.js파일에서 선언하였다.
*/

import express from "express";
import routes from "../routes";
import { 
    editProfile,
    userDetail, 
    changePassword
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;

// M Data
// V how does the data look
// C fuction that looks for the data