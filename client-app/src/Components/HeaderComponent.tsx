import "./ComponentsStyles.css";
import DK_logo from "../DKlogo.png";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { userService } from "../App";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

const HeaderComponent = observer((): JSX.Element => {
    const navigate = useNavigate();

    return (
        <div className="header">
            <img src={DK_logo} alt="DK" className="headerDKLogo"></img>
            <div>
                <h1>Online Electronic Store</h1>
                <nav className="navbar navbar-expand">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/catalog">
                                        Catalog
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart">
                                        {userService.user
                                            ? "Shopping Cart"
                                            : ""}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/orderHistory"
                                    >
                                        {userService.user
                                            ? "Order History"
                                            : ""}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </div>
            <div className="headerButtons">
                <h3
                    className="btn btn-primary"
                    onClick={() => {
                        if (!userService.user) {
                            // navigate("/login");
                            userService.Login("user", "1234");
                        } else {
                            userService.Logout();
                            navigate("/");
                        }
                    }}
                >
                    {userService.user ? "Log out" : "Log in"}
                </h3>
            </div>
        </div>
    );
});

export default HeaderComponent;
