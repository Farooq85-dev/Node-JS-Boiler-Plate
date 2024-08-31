import { Router } from "express";
import { PostData } from "../controllers/post.controller.js";
import { GetData } from "../controllers/get.controller.js";
import { UpdateData } from "../controllers/update.controller.js";
import { DelData } from "../controllers/delete.controller.js";

//Creating Route To User All Requests
const router = Router();

//POST Routes
router.post("/registerUser", PostData);
//GET Routes
router.get("/getUser", GetData);
//PUT Routes
router.put("/updateUser/:id", UpdateData);
//Delete Routes
router.delete("/deleteUser/:id", DelData);

//Exporting Router
export { router };
