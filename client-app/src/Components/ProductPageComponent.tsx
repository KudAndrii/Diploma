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
        <div className="container mt-4">
            <div className="card color-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-6">
                            <div className="white-box text-center">
                                <img
                                    src={product?.img}
                                    className="img-fluid rounded-3"
                                />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-6">
                            <h2 className="box-title mt-5">{product?.name}</h2>
                            <h1 className="mt-5">{"₴ " + product?.price}</h1>
                            {userService.user?.token && (
                                <button
                                    className="button-basket"
                                    onClick={() => {
                                        AddProductToCart(
                                            1,
                                            product?.productId as number
                                        );
                                    }}
                                >
                                    Basket
                                </button>
                            )}
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <h4>
                                        <b>OS: </b>
                                        {product?.os}
                                    </h4>
                                </li>
                                <li>
                                    <h4>
                                        <b>Processor: </b>
                                        {product?.processor}
                                    </h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPageComponent;

/*

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
*/
