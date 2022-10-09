import ProductCardComponent from "./ProductCardComponent";
import ProductType from "../Types/ProductType";
import { useEffect, useState } from "react";
import GetCartByUserId from "../Requests/GetCartByUserId";
import { Button } from "react-bootstrap";
import RemoveProductFromCart from "../Requests/RemoveProductFromCart";

const CartComponent = (): JSX.Element => {
    const emptyMessage = "It is empty now :(";
    const [shoppingCart, setShoppingCart] = useState<ProductType[]>([]);

    useEffect(() => {
        const firstTime = async () => {
            const cart = await GetCartByUserId(1);
            setShoppingCart(cart);
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
            <>
                <div className="container my-5">
                    <div className="row mx-auto row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                        {shoppingCart.map((x, index) => (
                            <div key={index}>
                                <ProductCardComponent
                                    productType={x}
                                ></ProductCardComponent>
                                <Button
                                    className="btn marginTop"
                                    onClick={async () => {
                                        await RemoveProductFromCart(
                                            1,
                                            x?.productId as number
                                        );

                                        const cart = await GetCartByUserId(1);
                                        setShoppingCart(cart);
                                    }}
                                >
                                    Remove from cart
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
};

export default CartComponent;
