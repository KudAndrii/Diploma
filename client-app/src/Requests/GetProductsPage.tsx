import { apiConfig } from "../apiConfig";
import ProductType from "../Types/ProductType";

const GetProductsPage = async (
    pageIndex: number,
    categoryId: number,
    descSort: boolean
): Promise<ProductType[]> => {
    const requestBody = {
        pageIndex: pageIndex,
        categoryId: categoryId,
        descSort: descSort,
    };

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
    };

    const result: Response = await fetch(
        `https://localhost:7026/Products/ProductsPage`,
        requestOptions
    );
    const body = await result.json();
    let products = new Object() as ProductType[];
    if (body) {
        products = body as ProductType[];
    }

    return products;
};

export default GetProductsPage;
