import { apiConfig } from "../apiConfig";
import ProductType from "../Types/ProductType";

const GetCartByUserId = async (id: number): Promise<ProductType[]> => {
    const result: Response = await fetch(`https://localhost:7026/Cart/${id}`);
    const body = await result.json();
    let products = new Object() as ProductType[];
    if (body) {
        products = body as ProductType[];
    }
    return products;
};

export default GetCartByUserId;
