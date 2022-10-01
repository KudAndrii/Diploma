import ProductType from "../Types/ProductType";

const GetProductRange = (): ProductType[] => {
    const result: ProductType[] = [
        {
            id: 1,
            name: "one",
            category: "first",
        },
        {
            id: 2,
            name: "two",
            category: "first",
        },
        {
            id: 3,
            name: "three",
            category: "first",
        },
        {
            id: 4,
            name: "four",
            category: "second",
        },
        {
            id: 5,
            name: "five",
            category: "second",
        },
        {
            id: 6,
            name: "six",
            category: "second",
        },
    ];

    return result;
};

export default GetProductRange;
