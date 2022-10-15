import { observer } from "mobx-react-lite";
import ProductCardComponent from "./ProductCardComponent";
import Sort_order from "../icons/sort-order.png";
import Sort_desc from "../icons/sort-desc.png";
import Sort_asc from "../icons/sort-asc.png";
import Arrow_left from "../icons/left-arrow.png";
import Arrow_right from "../icons/right-arrow.png";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./ComponentsStyles.css";
import CategoryType from "../Types/CategoryType";
import GetProductCategories from "../Requests/GetProductCategories";
import ProductType from "../Types/ProductType";
import GetProductsPage from "../Requests/GetProductsPage";
import ProductListComponent from "./ProductListComponent";

const CatapogComponent = observer((): JSX.Element => {
    const [sortIcon, setSortIcon] = useState(Sort_order);

    const [pageIndex, setPageIndex] = useState(1);
    const [category, setCategory] = useState(-1);
    const [sortFlag, setSortFlag] = useState(false);

    const [categories, setCategories] = useState<CategoryType[]>();
    const [productList, setProductList] = useState<ProductType[]>();

    useEffect(() => {
        const firstTime = async () => {
            const categ = await GetProductCategories();
            setCategories(categ);

            const products = await GetProductsPage(
                pageIndex,
                category,
                sortFlag
            );
            setProductList(products);
        };

        firstTime();
    }, []);

    return (
        <>
            <div className="catalogGeneral">
                <div className="tools">
                    <h4
                        className={
                            category === -1
                                ? "category btn btn-dark "
                                : "category btn btn-outline-dark"
                        }
                        onClick={async () => {
                            setCategory(-1);
                            setPageIndex(1);
                            const products = await GetProductsPage(
                                1,
                                -1,
                                sortFlag
                            );
                            setProductList(products);
                        }}
                    >
                        All categories
                    </h4>
                    {categories &&
                        categories.map((x, index) => (
                            <h4
                                className={
                                    x.categoryId === category
                                        ? "category btn btn-dark "
                                        : "category btn btn-outline-dark"
                                }
                                key={index}
                                onClick={async () => {
                                    // products by category request
                                    setCategory(x.categoryId);
                                    setPageIndex(1);
                                    const products = await GetProductsPage(
                                        1,
                                        x.categoryId,
                                        sortFlag
                                    );
                                    setProductList(products);
                                }}
                            >
                                {x.name}
                            </h4>
                        ))}
                </div>
                <div className="catalog  mx-3">
                    <div className="container my-5">
                        <img
                            src={sortIcon}
                            id="pointer"
                            className="sort_icon"
                            onClick={async () => {
                                if (sortFlag) {
                                    // sort asc request
                                    const products = await GetProductsPage(
                                        pageIndex,
                                        category,
                                        sortFlag
                                    );
                                    setProductList(products);

                                    setSortFlag(false);
                                    setSortIcon(Sort_desc);
                                } else {
                                    // sort desc request
                                    const products = await GetProductsPage(
                                        pageIndex,
                                        category,
                                        sortFlag
                                    );
                                    setProductList(products);

                                    setSortFlag(true);
                                    setSortIcon(Sort_asc);
                                }
                            }}
                        ></img>
                        <div className="row mx-auto row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                            <ProductListComponent
                                productList={productList!}
                            ></ProductListComponent>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pageing">
                <img
                    src={Arrow_left}
                    id="pointer"
                    className="arrow"
                    onClick={async () => {
                        // get previous page
                        if (pageIndex > 1) {
                            setPageIndex(pageIndex - 1);

                            const products = await GetProductsPage(
                                pageIndex - 1,
                                category,
                                sortFlag
                            );
                            setProductList(products);
                        }
                    }}
                ></img>
                <img
                    src={Arrow_right}
                    id="pointer"
                    className="arrow"
                    onClick={async () => {
                        // get next page
                        if ((productList?.length as number) === 6) {
                            setPageIndex(pageIndex + 1);

                            const products = await GetProductsPage(
                                pageIndex + 1,
                                category,
                                sortFlag
                            );
                            setProductList(products);
                        }
                    }}
                ></img>
            </div>
            <Outlet />
        </>
    );
});

export default CatapogComponent;
