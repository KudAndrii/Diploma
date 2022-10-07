import { apiConfig } from "../apiConfig";
import CategoryType from "../Types/CategoryType";

const GetProductCategories = async (): Promise<CategoryType[]> => {
    const result: Response = await fetch(`https://localhost:7026/Categories`);
    const body = await result.json();
    let categories = new Object() as CategoryType[];
    if (body) {
        categories = body as CategoryType[];
    }

    return categories;
};

export default GetProductCategories;
