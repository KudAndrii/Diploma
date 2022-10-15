import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import { Route, Routes } from "react-router-dom";
import CatalogComponent from "./Components/CatalogComponent";
import ProductPageComponent from "./Components/ProductPageComponent";
import CartComponent from "./Components/BasketComponent";
import { UserService } from "./Services/UserService";
import OrderHistoryComponent from "./Components/OrderHistoryComponent";
import LoginComponent from "./Components/LogInComponent";

export const userService = new UserService();

function App() {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <Routes>
                <Route path="/" element={<CatalogComponent />} />
                <Route path="catalog" element={<CatalogComponent />} />
                <Route path="catalog/:id" element={<ProductPageComponent />} />
                <Route path="basket" element={<CartComponent />} />
                <Route
                    path="/order-history"
                    element={<OrderHistoryComponent />}
                />
            </Routes>
        </>
    );
}

export default App;
