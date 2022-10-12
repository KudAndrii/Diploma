import ProductCardComponent from "./ProductCardComponent";
import ProductType from "../Types/ProductType";
import { useEffect, useState } from "react";
import GetCartByUserId from "../Requests/GetCartByUserId";
import { Button } from "react-bootstrap";
import RemoveProductFromCart from "../Requests/RemoveProductFromCart";
import OrderType from "../Types/OrderType";
import GetOrderHistoryByUserId from "../Requests/GetOrderHistoryByUserId";
import OrderLineComponent from "./OrderLineComponent";
import { userService } from "../App";
import Table from "react-bootstrap/Table";
import CategoryType from "../Types/CategoryType";
import GetProductCategories from "../Requests/GetProductCategories";

const OrderHistoryComponent = (): JSX.Element => {
    const emptyMessage = "It is empty now :(";
    const [orderHistory, setOrderHistory] = useState<OrderType[]>([]);
    const [categories, setCategories] = useState<CategoryType[]>();

    useEffect(() => {
        const firstTime = async () => {
            const categ = await GetProductCategories();
            setCategories(categ);

            const cart = await GetOrderHistoryByUserId(
                userService.user?.userId!
            );
            setOrderHistory(cart);
        };

        firstTime();
    }, []);

    const getCategoryImg = (
        categories: CategoryType[],
        product: ProductType
    ): string | null => {
        let result: string | null = null;

        categories.forEach((category) => {
            if (category.categoryId === product.categoryId) {
                result = category.img!;
            }
        });

        return result;
    };

    if (orderHistory.length === 0) {
        return (
            <>
                <h1 className="emptyMessage">{emptyMessage}</h1>
            </>
        );
    } else {
        return (
            <>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderHistory.map((x, index) => (
                            <tr key={index}>
                                <OrderLineComponent
                                    orderType={x}
                                    categoryImg={
                                        getCategoryImg(categories!, x.product)!
                                    }
                                ></OrderLineComponent>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </>
        );
    }
};

export default OrderHistoryComponent;
