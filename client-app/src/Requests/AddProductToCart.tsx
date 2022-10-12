import { apiConfig } from "../apiConfig";
import { userService } from "../App";
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
            Authorization: "Bearer " + userService.user?.token,
        },
        body: JSON.stringify(requestBody),
    };

    const result: Response = await fetch(
        `https://localhost:7026/carts/product`,
        requestOptions
    );

    return result.status;
};

export default AddProductToCart;
