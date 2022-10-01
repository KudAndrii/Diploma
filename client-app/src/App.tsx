import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import { Route, Routes } from "react-router-dom";
import { ProductRangeService } from "./Services/ProductRangeService";
import CatalogComponent from "./Components/CatalogComponent";
import ProductComponent from "./Components/ProductComponent";
import CartComponent from "./Components/CartComponent";
import { ProductCategoriesService } from "./Services/ProductCategoriesService";

export const productRangeService = new ProductRangeService();
export const productCategoriesService = new ProductCategoriesService();

function App() {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <Routes>
                <Route path="catalog" element={<CatalogComponent />} />
                <Route path="catalog/:id" element={<ProductComponent />} />
                <Route path="cart" element={<CartComponent />} />
            </Routes>
        </>
    );
}

export default App;
