import { Request, Response, NextFunction } from "express";
import { createProducts, getAllProducts} from "../services/productService";
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
export const createProductsController = async (req: Request,
    res: Response, next: NextFunction): Promise<void> =>
{
    try
    {
        const {
            name,
            sku,
            quantity,
            price,
            category,
            createdAt,
            updatedAt
        } = req.body;
 
        const product: Product =
        {
            name,
            sku,
            quantity,
            price,
            category,
            createdAt,
            updatedAt
        };
 
        const products: Product = await createProducts(product);
 
        res.status(HTTP_STATUS.CREATED).json
        ({  message: "Product created",
            data: products
        });
    }
    catch (error: unknown)
    {
        next(error);
    }
};
