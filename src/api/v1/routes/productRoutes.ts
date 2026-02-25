import express, { Router } from "express";
import {createProductsController, getAllProductsController} from "../controllers/productController"
import { validateRequest } from "../middleware/validate";
import { postSchemas } from "../validation/productValidation";

const productRouter: Router = express.Router();

productRouter.get("/products", getAllProductsController);
productRouter.post("/products", validateRequest(postSchemas.create), createProductsController);


export default productRouter;