import { apiConfig } from "../apiConfig";
import ProductType from "../Types/ProductType";

const GetProductById = async (id: number): Promise<ProductType> => {
    const result: Response = await fetch(
        `https://localhost:7026/products/${id}`
    );
    const body = await result.json();
    let product = new Object() as ProductType;
    if (body) {
        product = body as ProductType;
    }
    return product;
};

export default GetProductById;
