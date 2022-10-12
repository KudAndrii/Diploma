import { FC, useEffect, useState } from "react";
import "./ComponentsStyles.css";
import { useParams } from "react-router";
import { Button } from "react-bootstrap";
import GetProductById from "../Requests/GetProductById";
import ProductType from "../Types/ProductType";
import AddProductToCart from "../Requests/AddProductToCart";
import { userService } from "../App";
import { MDBBtn } from "mdb-react-ui-kit";

const ProductPageComponent: FC = (): JSX.Element => {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductType | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            const prod = await GetProductById(Number(id));

            setProduct(prod);
        };

        fetchData();
    });

    return (
        <>
            <div className="productPage">
                <div className="productGeneral">
                    <img
                        src={product?.img}
                        className="productPageImage"
                        alt="product image"
                    />
                    <h3 className="productName">{product?.name}</h3>
                </div>
                <div className="productDescription">
                    <h5 className="card-text">{product?.price + " ₴"}</h5>
                    <p>{product?.os}</p>
                    <p>{product?.processor}</p>
                    {userService.user && (
                        <Button
                            className="btn"
                            onClick={() => {
                                AddProductToCart(
                                    1,
                                    product?.productId as number
                                );
                            }}
                        >
                            Add to cart
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductPageComponent;
