import express from "express";
import { contactController, reservationController }from "../controllers/ContactController.js";

const contactRouter = express.Router();

contactRouter.post("/", contactController);
contactRouter.post("/reservation", reservationController);

export default contactRouter;