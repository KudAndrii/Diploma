import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import { Route, Routes } from "react-router-dom";
import { ProductRangeService } from "./Services/ProductRangeService";
import CatalogComponent from "./Components/CatalogComponent";
import { ProductCategoriesService } from "./Services/ProductCategoriesService";

export const productRangeService = new ProductRangeService();
export const productCategoriesService = new ProductCategoriesService();

function App() {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <Routes>
                <Route path="catalog" element={<CatalogComponent />} />
                <Route path="phone/:id" element={<HeaderComponent />} />
                <Route path="cart" element={<HeaderComponent />} />
            </Routes>
        </>
    );
}

export default App;
