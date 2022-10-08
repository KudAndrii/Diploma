import { FC } from "react";
import ProductType from "../Types/ProductType";
import "./ComponentsStyles.css";

type childType = {
    productType: ProductType;
};

const ProductCardComponent: FC<childType> = (props: childType): JSX.Element => {
    return (
        <>
            <div className="card">
                <img
                    src={props.productType.img}
                    className="card-img-top productImg"
                    alt={props.productType.name}
                />
                <div className="card-body">
                    <p className="card-text">{props.productType.name}</p>
                    <p>{props.productType.price + " ₴"}</p>
                </div>
            </div>
        </>
    );
};

export default ProductCardComponent;
