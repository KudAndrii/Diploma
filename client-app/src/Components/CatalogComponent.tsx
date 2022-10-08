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
                    {categories &&
                        categories.map((x, index) => (
                            <h4
                                className="category btn btn-outline-dark"
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
                <div className="catalog">
                    <div className="container my-5">
                        <img
                            src={sortIcon}
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
                            {productList &&
                                productList.map((x, index) => (
                                    <Link
                                        className="nav-link"
                                        to={"/catalog/" + x.productId}
                                    >
                                        <div key={index}>
                                            <ProductCardComponent
                                                productType={x}
                                            ></ProductCardComponent>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pageing">
                <img
                    src={Arrow_left}
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
