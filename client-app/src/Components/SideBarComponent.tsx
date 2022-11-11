import { observer } from "mobx-react-lite";
import ProductCardComponent from "./ProductCardComponent";
import Sort_desc from "../icons/sort-desc.png";
import Menu_icon from "../icons/menu.png";
import Sort_asc from "../icons/sort-asc.png";
import Arrow_left from "../icons/left-arrow.png";
import Arrow_right from "../icons/right-arrow.png";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./SideBarComponent.css";
import "./ComponentsStyles.css";
import CategoryType from "../Types/CategoryType";
import GetProductCategories from "../Requests/GetProductCategories";
import ProductType from "../Types/ProductType";
import GetProductsPage from "../Requests/GetProductsPage";
import ProductListComponent from "./ProductListComponent";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { productRangeService } from "../App";

type childType = {
    sidebar: boolean;
};

const SideBarComponent = observer((props: childType): JSX.Element => {
    const [categories, setCategories] = useState<CategoryType[]>();

    useEffect(() => {
        const firstTime = async () => {
            const categ = await GetProductCategories();
            setCategories(categ);
        };

        firstTime();
    }, []);

    return (
        <>
            <nav
                id="sidebar"
                className={props.sidebar === false ? "active" : ""}
            >
                <div className="sidebar-header">
                    <h3>Electronic store</h3>
                </div>

                <ul className="list-unstyled components">
                    <li className="active">
                        <a>
                            <u>Categories</u>
                        </a>
                    </li>
                    {productRangeService.requestOptions.categoryId === -1 || (
                        <li>
                            <a
                                onClick={async () => {
                                    // products by category request
                                    productRangeService.requestOptions.categoryId =
                                        -1;
                                    productRangeService.requestOptions.pageIndex = 1;
                                    productRangeService.SetProductList();
                                }}
                            >
                                All
                            </a>
                        </li>
                    )}
                    {categories &&
                        categories.map(
                            (x, index) =>
                                productRangeService.requestOptions
                                    .categoryId === x.categoryId || (
                                    <li>
                                        <a
                                            key={index}
                                            onClick={async () => {
                                                // products by category request
                                                productRangeService.requestOptions.categoryId =
                                                    x.categoryId;
                                                productRangeService.requestOptions.pageIndex = 1;
                                                productRangeService.SetProductList();
                                            }}
                                        >
                                            {x.name}
                                        </a>
                                    </li>
                                )
                        )}
                </ul>
            </nav>
        </>
    );
});

export default SideBarComponent;
