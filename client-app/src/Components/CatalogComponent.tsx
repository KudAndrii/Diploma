import { observer } from "mobx-react-lite";
import { productRangeService } from "../App";
import { productCategoriesService } from "../App";
import ProductCardComponent from "./ProductCardComponent";
import Sort_down from "../icons/sort-alpha-down.svg";
import Sort_up from "../icons/sort-alpha-up-alt.svg";
import { useState } from "react";

const CatapogComponent = observer((): JSX.Element => {
    const [sortFlag, setSortFlag] = useState(true);

    return (
        <>
            <div className="catalogGeneral">
                <div className="tools">
                    {productCategoriesService.categories &&
                        productCategoriesService.categories.map((x, index) => (
                            <h4
                                className="btn"
                                key={index}
                                onClick={() => {
                                    // products by category request
                                }}
                            >
                                {x}
                            </h4>
                        ))}
                </div>
                <div className="catalog container my-5">
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
                            productRangeService.productList.map((x, index) => (
                                <div key={index}>
                                    <ProductCardComponent
                                        productType={x}
                                    ></ProductCardComponent>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
});

export default CatapogComponent;
