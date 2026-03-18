import express from "express";

import protectRoute from "../middleware/protectRoute.js";
import { getUsersFroSideBar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/",protectRoute,getUsersFroSideBar);

export default router;
