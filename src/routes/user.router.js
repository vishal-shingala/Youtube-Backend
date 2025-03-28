import { registerUser } from "../controllers/user.controllers.js";
import { Router } from "express";

const router = Router();

router.route("/Register").post(registerUser)

export default router;