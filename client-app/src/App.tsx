import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import { Route, Routes } from "react-router-dom";
import CatalogComponent from "./Components/CatalogComponent";
import ProductPageComponent from "./Components/ProductPageComponent";
import CartComponent from "./Components/CartComponent";

function App() {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <Routes>
                <Route path="catalog" element={<CatalogComponent />} />
                <Route path="catalog/:id" element={<ProductPageComponent />} />
                <Route path="cart" element={<CartComponent />} />
            </Routes>
        </>
    );
}

export default App;
