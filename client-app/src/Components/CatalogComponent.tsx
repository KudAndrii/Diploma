import { observer } from "mobx-react-lite";
import ProductCardComponent from "./ProductCardComponent";
import Sort_icon from "../icons/sort.png";
import Sort_desc from "../icons/sort-desc.png";
import Sort_asc from "../icons/sort-asc.png";
import Arrow_left from "../icons/left-arrow.png";
import Arrow_right from "../icons/right-arrow.png";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./ComponentsStyles.css";
import "./SideBarComponent.css";
import CategoryType from "../Types/CategoryType";
import GetProductCategories from "../Requests/GetProductCategories";
import ProductType from "../Types/ProductType";
import ProductListComponent from "./ProductListComponent";
import SideBarComponent from "./SideBarComponent";
import Menu_icon from "../icons/menu.png";
import { productRangeService } from "../App";

const CatapogComponent = observer((): JSX.Element => {
    const [sidebar, setSidebar] = useState(false);

    const [categories, setCategories] = useState<CategoryType[]>();

    useEffect(() => {
        const firstTime = async () => {
            const categ = await GetProductCategories();
            setCategories(categ);

            productRangeService.SetProductList();
        };

        firstTime();
    }, []);

    return (
        <>
            <div className="wrapper">
                <SideBarComponent sidebar={sidebar}></SideBarComponent>

                <div id="content">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <img
                                id="icons"
                                src={Menu_icon}
                                onClick={() => {
                                    if (sidebar) {
                                        setSidebar(false);
                                    } else {
                                        setSidebar(true);
                                    }
                                }}
                            />
                            <img
                                src={Sort_icon}
                                id="icons"
                                onClick={async () => {
                                    if (
                                        !productRangeService.requestOptions
                                            .sortFlag
                                    ) {
                                        // sort asc request
                                        productRangeService.requestOptions.sortFlag =
                                            true;

                                        productRangeService.SetProductList();
                                    } else {
                                        // sort desc request
                                        productRangeService.requestOptions.sortFlag =
                                            false;

                                        productRangeService.SetProductList();
                                    }
                                }}
                            />
                        </div>
                    </nav>

                    <div className="catalogGeneral">
                        <div className="catalog  mx-3">
                            <div className="container my-5">
                                <div className="row mx-auto row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                                    <ProductListComponent
                                        productList={
                                            productRangeService.productList!
                                        }
                                    ></ProductListComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pageing">
                        <img
                            src={Arrow_left}
                            id="icons"
                            className=""
                            onClick={async () => {
                                // get previous page
                                if (
                                    productRangeService.requestOptions
                                        .pageIndex > 1
                                ) {
                                    productRangeService.requestOptions.pageIndex -= 1;

                                    productRangeService.SetProductList();
                                }
                            }}
                        ></img>
                        <img
                            src={Arrow_right}
                            id="icons"
                            className=""
                            onClick={async () => {
                                // get next page
                                if (
                                    (productRangeService.productList
                                        ?.length as number) === 6
                                ) {
                                    productRangeService.requestOptions.pageIndex += 1;

                                    productRangeService.SetProductList();
                                }
                            }}
                        ></img>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
});

export default CatapogComponent;
