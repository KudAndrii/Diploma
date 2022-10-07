import CategoryType from "./CategoryType";

type Product = {
    productId: number;
    name: string;
    img: string | null;
    categoryId: number;
    category: CategoryType | null;
    price: number;
    shortDescription: string | null;
    description: string | null;
};

export default Product;
