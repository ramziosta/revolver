import express from "express";
import { contactController, reservationController, eventInquiryController }from "../controllers/ContactController.js";

const contactRouter = express.Router();

contactRouter.post("/", contactController);
contactRouter.post("/reservation", reservationController);
contactRouter.post("/event", eventInquiryController);

export default contactRouter;