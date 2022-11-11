import { apiConfig } from "../apiConfig";
import { userService } from "../App";
import OrderType from "../Types/OrderType";
import ProductType from "../Types/ProductType";

const GetOrderHistoryByUserId = async (id: number): Promise<OrderType[]> => {
    const requestOptions = {
        headers: {
            Authorization: `Bearer ${userService.user?.token}`,
        },
    };

    const result: Response = await fetch(
        `https://localhost:7026/orders/${id}`,
        requestOptions
    );
    const body = await result.json();
    let products = new Object() as OrderType[];
    if (body) {
        products = body as OrderType[];
    }
    return products;
};

export default GetOrderHistoryByUserId;
