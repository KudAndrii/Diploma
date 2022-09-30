import ProductType from "../Types/ProductType";

const GetProductRange = (): ProductType[] => {
    const result: ProductType[] = [
        {
            name: "one",
            category: "first",
        },
        {
            name: "two",
            category: "first",
        },
        {
            name: "three",
            category: "first",
        },
        {
            name: "four",
            category: "second",
        },
        {
            name: "five",
            category: "second",
        },
        {
            name: "six",
            category: "second",
        },
    ];

    return result;
};

export default GetProductRange;
