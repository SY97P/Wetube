import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("Users"));
userRouter.get(routes.userDetail, (req, res) => res.send("User Detail"));
userRouter.get(routes.editProfile, (req, res) => res.send("Edit profile"));
userRouter.get(routes.changePassword, (req, res) => res.send("Change Password"));

export default userRouter;

// M Data
// V how does the data look
// C fuction that looks for the data