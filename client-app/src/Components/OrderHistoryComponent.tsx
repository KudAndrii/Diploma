import ProductCardComponent from "./ProductCardComponent";
import ProductType from "../Types/ProductType";
import { useEffect, useState } from "react";
import GetCartByUserId from "../Requests/GetCartByUserId";
import { Button } from "react-bootstrap";
import RemoveProductFromCart from "../Requests/RemoveProductFromCart";
import OrderType from "../Types/OrderType";
import GetOrderHistoryByUserId from "../Requests/GetOrderHistoryByUserId";
import OrderLineComponent from "./OrderLineComponent";

const OrderHistoryComponent = (): JSX.Element => {
    const emptyMessage = "It is empty now :(";
    const [orderHistory, setOrderHistory] = useState<OrderType[]>([]);

    useEffect(() => {
        const firstTime = async () => {
            const cart = await GetOrderHistoryByUserId(1);
            setOrderHistory(cart);
        };

        firstTime();
    }, []);

    if (orderHistory.length === 0) {
        return (
            <>
                <h1 className="emptyMessage">{emptyMessage}</h1>
            </>
        );
    } else {
        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderHistory.map((x, index) => (
                            <div key={index}>
                                <OrderLineComponent
                                    orderType={x}
                                ></OrderLineComponent>
                            </div>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
};

export default OrderHistoryComponent;