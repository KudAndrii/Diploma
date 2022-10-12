import { FC } from "react";
import OrderType from "../Types/OrderType";
import ProductType from "../Types/ProductType";
import "./ComponentsStyles.css";

type childType = {
    orderType: OrderType;
    categoryImg: string;
};

const OrderLineComponent: FC<childType> = (props: childType): JSX.Element => {
    return (
        <>
            <td>
                <img
                    src={props.categoryImg}
                    className="card-img-top productOrderImage"
                    alt={props.orderType.product.name}
                />
            </td>
            <td>{props.orderType.product.name}</td>
            <td>{props.orderType.product.price + " ₴"}</td>
            <td>{props.orderType.orderDate}</td>
        </>
    );
};

export default OrderLineComponent;
