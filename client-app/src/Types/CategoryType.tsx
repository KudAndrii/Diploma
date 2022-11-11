import ProductType from "./ProductType";

type Category = {
    categoryId: number;
    name: string;
    img: string | null;
    products: ProductType[];
};

export default Category;
