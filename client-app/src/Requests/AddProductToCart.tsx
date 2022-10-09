import { apiConfig } from "../apiConfig";
import ProductType from "../Types/ProductType";

const AddProductToCart = async (
    userId: number,
    productId: number
): Promise<number> => {
    const requestBody = {
        userId: userId,
        productId: productId,
    };

    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
    };

    const result: Response = await fetch(
        `https://localhost:7026/Cart/AddProduct`,
        requestOptions
    );

    return result.status;
};

export default AddProductToCart;
