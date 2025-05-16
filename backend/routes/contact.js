import express from "express";
import contactController from "../controllers/ContactController.js";

const contactRouter = express.Router();

contactRouter.post("/", contactController);

export default contactRouter;