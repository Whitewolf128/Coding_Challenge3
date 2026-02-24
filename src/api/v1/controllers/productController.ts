import { Request, Response, NextFunction } from "express";
import { getAllProducts} from "../services/productService";
import { HTTP_STATUS } from "../constants/httpConstants";
import { Product } from "../models/productModel";

export const getAllProductsController = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const products: Product[] = await getAllProducts();
        res.status(200).json(
        {
            "message": "Products Retrieved",
            count: products.length,
            data: products
        })
    } catch (error: unknown) {
        next(error);
    }
};
