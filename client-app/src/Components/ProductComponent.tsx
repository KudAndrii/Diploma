import { FC } from "react";
import "./ComponentsStyles.css";
import { productRangeService } from "../App";
import { useParams } from "react-router";
import "./ComponentsStyles.css";
import { Button } from "react-bootstrap";

const ProductComponent: FC = (): JSX.Element => {
    const { id } = useParams();
    const product = productRangeService.productList.find((prod) => {
        return prod.id === Number(id);
    });

    return (
        <>
            <div className="productPage">
                <div className="productDescription">
                    <img className="pageImage" alt="product image" />
                    <h3 className="productName">{product?.name}</h3>
                </div>
                <div className="productDescription">
                    <h5 className="card-text">{product?.category}</h5>
                    <Button
                        className="btn marginRightButton"
                        onClick={() => {}}
                    >
                        Add to cart
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ProductComponent;
