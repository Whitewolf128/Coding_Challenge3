import express, { Router } from "express";
import {getAllProductsController} from "../controllers/productController"

const productRouter: Router = express.Router();

productRouter.get("/products", getAllProductsController);


export default productRouter;