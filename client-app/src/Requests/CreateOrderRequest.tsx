import { apiConfig } from "../apiConfig";
import { userService } from "../App";

const CreateOrder = async (
    userId: number,
    productIds: number[]
): Promise<number> => {
    const requestBody = {
        userId: userId,
        productIds: productIds,
    };
    debugger;
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userService.user?.token}`,
        },
        body: JSON.stringify(requestBody),
    };

    const result: Response = await fetch(
        `https://localhost:7026/orders`,
        requestOptions
    );

    return result.status;
};

export default CreateOrder;
