import { observer } from "mobx-react-lite";
import { productRangeService } from "../App";
import { productCategoriesService } from "../App";
import ProductCardComponent from "./ProductCardComponent";
import Sort_down from "../icons/sort-alpha-down.svg";
import Sort_up from "../icons/sort-alpha-up-alt.svg";
import Arrow_left from "../icons/left-arrow.png";
import Arrow_right from "../icons/right-arrow.png";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./ComponentsStyles.css";

const CatapogComponent = observer((): JSX.Element => {
    const [sortFlag, setSortFlag] = useState(true);

    return (
        <>
            <div className="catalogGeneral">
                <div className="tools">
                    {productCategoriesService.categories &&
                        productCategoriesService.categories.map((x, index) => (
                            <h4
                                className="category btn btn-outline-dark"
                                key={index}
                                onClick={() => {
                                    // products by category request
                                }}
                            >
                                {x}
                            </h4>
                        ))}
                </div>
                <div className="catalog">
                    <div className="container my-5">
                        <img
                            src={sortFlag === true ? Sort_down : Sort_up}
                            className="sort_icon"
                            onClick={() => {
                                if (sortFlag) {
                                    // sort asc request
                                    setSortFlag(false);
                                } else {
                                    // sort desc request
                                    setSortFlag(true);
                                }
                            }}
                        ></img>
                        <div className="row mx-auto row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                            {productRangeService.productList &&
                                productRangeService.productList.map(
                                    (x, index) => (
                                        <Link
                                            className="nav-link"
                                            to={"/catalog/" + x.id}
                                        >
                                            <div key={index}>
                                                <ProductCardComponent
                                                    productType={x}
                                                ></ProductCardComponent>
                                            </div>
                                        </Link>
                                    )
                                )}
                        </div>
                    </div>
                    <div className="pageing">
                        <img
                            src={Arrow_left}
                            className="arrow"
                            onClick={() => {
                                // get previous page
                            }}
                        ></img>
                        <img
                            src={Arrow_right}
                            className="arrow"
                            onClick={() => {
                                // get next page
                            }}
                        ></img>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
});

export default CatapogComponent;
