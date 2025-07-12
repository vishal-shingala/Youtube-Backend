import {
  loginUser,
  logOutUser,
  refershAccessToken,
  registerUser,
} from "../controllers/user.controllers.js";
import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/Register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
router.route("/login").post(loginUser);
//Secured Routes
router.route("/logout").post(verifyJWT, logOutUser);
router.route("refresh-token").post(refershAccessToken);
export default router;
