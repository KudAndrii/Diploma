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
                    src="..."
                    className="card-img-top"
                    alt={props.productType.name}
                />
                <div className="card-body">
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ProductCardComponent;
