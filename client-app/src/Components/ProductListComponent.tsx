import { observer } from "mobx-react-lite";
import ProductCardComponent from "./ProductCardComponent";
import Sort_order from "../icons/sort-order.png";
import Sort_desc from "../icons/sort-desc.png";
import Sort_asc from "../icons/sort-asc.png";
import Arrow_left from "../icons/left-arrow.png";
import Arrow_right from "../icons/right-arrow.png";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CategoryType from "../Types/CategoryType";
import GetProductCategories from "../Requests/GetProductCategories";
import ProductType from "../Types/ProductType";
import GetProductsPage from "../Requests/GetProductsPage";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

type childType = {
    productList: ProductType[];
};

const ProductListComponent = (props: childType): JSX.Element => {
    return (
        <>
            {props.productList &&
                props.productList.map((x, index) => (
                    <div key={index}>
                        <Link
                            className="nav-link"
                            to={"/catalog/" + x.productId}
                        >
                            <ProductCardComponent
                                productType={x}
                            ></ProductCardComponent>
                        </Link>
                    </div>
                ))}
        </>
    );
};

export default ProductListComponent;
