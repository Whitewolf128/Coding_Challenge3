import { Product } from "../models/productModel";
import * as firestoreRepository from "../repositories/firestoreRepository";

/**
 * Updates an existing post.
 * @param {Post} postData - The updated post data.
 * @returns {Promise<void>}
 * @throws {Error} - If validation or repository operation fails.
 */

const COLLECTION = "product";

export const getAllProducts = async(): Promise<Product[]> => {
    try{
        const snapshot = await firestoreRepository.getDocuments(COLLECTION);
        const products: Product[] = snapshot.docs.map((doc) =>{
            const data = doc.data();
            return {
                id: doc.id,
                ...data
            } as Product;
        });
        return products; 
    }
    catch (error:unknown){
        const errorMessage = error instanceof Error ? error.message: "Unknown error";
        throw new Error(`Failed to retrieve all products: ${errorMessage}`);
    }
}

export const createProducts = async( productData: {
    name: string;
    sku: string;
    quantity: number;
    price: number;
    category: string;
}): Promise<Product> =>{
    try{
        const newProduct: Product = {
            name:productData.name,
            sku: productData.sku,
            quantity:productData.quantity,
            price:productData.price,
            category: productData.category,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        const id = await firestoreRepository.createDocument<Product>(COLLECTION, newProduct);
        return{id, ...newProduct} as Product;

    }
    catch(error: unknown){
        const errorMessage = error instanceof Error ? error.message: "Unknown error";
        throw new Error(`Failed to create product: ${errorMessage}`);
    }
}
// ... other service functions (getPostById, updatePost, deletePost) ...