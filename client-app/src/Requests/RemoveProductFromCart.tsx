import { apiConfig } from "../apiConfig";
import { userService } from "../App";
import ProductType from "../Types/ProductType";

const RemoveProductFromCart = async (
    userId: number,
    productId: number
): Promise<boolean> => {
    const requestBody = {
        userId: userId,
        productId: productId,
    };
    const requestOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userService.user?.token}`,
        },
        body: JSON.stringify(requestBody),
    };

    const result: Response = await fetch(
        `https://localhost:7026/carts/product`,
        requestOptions
    );

    const body = await result.json();
    let responce = new Object() as boolean;
    if (body) {
        responce = body as boolean;
    }

    return responce;
};

export default RemoveProductFromCart;
