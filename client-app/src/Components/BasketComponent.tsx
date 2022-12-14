import React, { useEffect, useState } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import ProductType from "../Types/ProductType";
import { userService } from "../App";
import GetCartByUserId from "../Requests/GetCartByUserId";
import { Button } from "react-bootstrap";
import Trash from "../icons/trash.png";
import "./ComponentsStyles.css";
import { Link } from "react-router-dom";
import RemoveProductFromCart from "../Requests/RemoveProductFromCart";
import CreateOrder from "../Requests/CreateOrderRequest";

const BasketComponent = (): JSX.Element => {
    const emptyMessage = "It is empty now :(";
    const [shoppingCart, setShoppingCart] = useState<ProductType[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const firstTime = async () => {
            const cart = await GetCartByUserId(userService.user?.userId!);
            setShoppingCart(cart);

            let sum = 0;
            cart.forEach((product) => {
                sum = sum + product.price;
            });
            setTotal(sum);
        };

        firstTime();
    }, []);

    if (shoppingCart.length === 0) {
        return (
            <>
                <h1 className="emptyMessage">{emptyMessage}</h1>
            </>
        );
    } else {
        return (
            <section className="h-100">
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol md="10">
                            {shoppingCart.map((x, index) => (
                                <div key={index}>
                                    <MDBCard className="width rounded-3 mb-4 color-3">
                                        <MDBCardBody className="p-4">
                                            <MDBRow className="justify-content-between align-items-center">
                                                <MDBCol md="2" lg="2" xl="2">
                                                    <Link
                                                        className="nav-link"
                                                        to={
                                                            "/catalog/" +
                                                            x.productId
                                                        }
                                                    >
                                                        <MDBCardImage
                                                            className="rounded-3"
                                                            fluid
                                                            src={x.img}
                                                            alt="Cotton T-shirt"
                                                        />
                                                    </Link>
                                                </MDBCol>
                                                <MDBCol md="3" lg="6" xl="3">
                                                    <p className="lead fw-normal mb-2">
                                                        {x.name}
                                                    </p>
                                                </MDBCol>
                                                <MDBCol
                                                    md="3"
                                                    lg="2"
                                                    xl="2"
                                                    className=""
                                                >
                                                    <MDBTypography
                                                        tag="h5"
                                                        className="mb-0"
                                                    >
                                                        {x.price + " ???"}
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol>
                                                    <img
                                                        src={Trash}
                                                        id="icons"
                                                        onClick={async () => {
                                                            await RemoveProductFromCart(
                                                                userService.user
                                                                    ?.userId!,
                                                                x?.productId as number
                                                            );

                                                            const cart =
                                                                await GetCartByUserId(
                                                                    userService
                                                                        .user
                                                                        ?.userId!
                                                                );
                                                            setShoppingCart(
                                                                cart
                                                            );

                                                            let sum = 0;
                                                            cart.forEach(
                                                                (product) => {
                                                                    sum =
                                                                        sum +
                                                                        product.price;
                                                                }
                                                            );
                                                            setTotal(sum);
                                                        }}
                                                    ></img>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>
                                </div>
                            ))}

                            <MDBCard className="width rounded-3 mb-4 color-3">
                                <MDBCardBody className="p-4">
                                    <MDBRow className="justify-content-between align-items-center">
                                        <MDBCol md="2" lg="2" xl="2">
                                            <MDBBtn
                                                id="color-1"
                                                className="ms-3 button-login"
                                                block
                                                size="lg"
                                                onClick={async () => {
                                                    let productIds: number[] =
                                                        shoppingCart.map(
                                                            (x) => x.productId
                                                        );

                                                    const result =
                                                        await CreateOrder(
                                                            userService.user
                                                                ?.userId!,
                                                            productIds
                                                        );

                                                    if (result === 200) {
                                                        shoppingCart.forEach(
                                                            (product) => {
                                                                RemoveProductFromCart(
                                                                    userService
                                                                        .user
                                                                        ?.userId!,
                                                                    product.productId
                                                                );
                                                            }
                                                        );
                                                        setShoppingCart([]);
                                                        setTotal(0);
                                                    }
                                                }}
                                            >
                                                <span>Order</span>
                                            </MDBBtn>
                                        </MDBCol>
                                        <MDBCol md="3" lg="6" xl="3"></MDBCol>
                                        <MDBCol
                                            md="3"
                                            lg="2"
                                            xl="2"
                                            className=""
                                        ></MDBCol>
                                        <MDBCol>
                                            <MDBTypography
                                                tag="h5"
                                                className="mb-0"
                                            >
                                                {"Total: " + total + " ???"}
                                            </MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="width"></MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        );
    }
};

export default BasketComponent;
