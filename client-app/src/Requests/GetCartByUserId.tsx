import { apiConfig } from "../apiConfig";
import { userService } from "../App";
import ProductType from "../Types/ProductType";

const GetCartByUserId = async (id: number): Promise<ProductType[]> => {
    debugger;
    const requestOptions = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + userService.user?.token,
        },
    };

    const result: Response = await fetch(
        `https://localhost:7026/carts/${id}`,
        requestOptions
    );
    const body = await result.json();
    let products = new Object() as ProductType[];
    if (body) {
        products = body as ProductType[];
    }
    return products;
};

export default GetCartByUserId;
