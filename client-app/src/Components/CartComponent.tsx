import ProductCardComponent from "./ProductCardComponent";
import ProductType from "../Types/ProductType";

const CartComponent = (): JSX.Element => {
    const emptyMessage = "It is empty now :(";
    const sessionString = sessionStorage.getItem("ShoppingCart");
    let sessionList: ProductType[] | null = null;
    if (sessionString) {
        sessionList = JSON.parse(sessionString);
    }

    if (!sessionList) {
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
                        {sessionList.map((x, index) => (
                            <div key={index}>
                                <ProductCardComponent
                                    productType={x}
                                ></ProductCardComponent>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
};

export default CartComponent;
