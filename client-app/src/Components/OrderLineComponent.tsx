import { FC } from "react";
import OrderType from "../Types/OrderType";
import ProductType from "../Types/ProductType";
import "./ComponentsStyles.css";

type childType = {
    orderType: OrderType;
};

const OrderLineComponent: FC<childType> = (props: childType): JSX.Element => {
    return (
        <>
            <tr>
                <th scope="row">{props.orderType.product.img}</th>
                <td>{props.orderType.product.name}</td>
                <td>{props.orderType.product.price}</td>
                <td>{props.orderType.orderDate}</td>
            </tr>
        </>
    );
};

export default OrderLineComponent;
