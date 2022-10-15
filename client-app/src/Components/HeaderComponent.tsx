import DK_logo from "../DKlogo.png";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { userService } from "../App";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import LoginComponent from "./LogInComponent";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const HeaderComponent = observer((): JSX.Element => {
    const navigate = useNavigate();
    // const [show, setShow] = useState(false);

    return (
        <Navbar className="color-3 pt-0" expand="lg">
            <Container className="mt-2">
                <Nav.Link className="mx-2" onClick={() => navigate("/")}>
                    <b>DK</b>
                </Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/catalog")}>
                            Catalog
                        </Nav.Link>
                        {userService.user?.token && (
                            <Nav.Link onClick={() => navigate("/basket")}>
                                Basket
                            </Nav.Link>
                        )}
                        {userService.user?.token && (
                            <Nav.Link
                                onClick={() => navigate("/order-history")}
                            >
                                Order History
                            </Nav.Link>
                        )}
                    </Nav>
                    <button
                        className="button-login color-1"
                        onClick={() => {
                            if (!userService.user) {
                                userService.modalFlag = true;
                            } else {
                                userService.modalFlag = false;
                                userService.Logout();
                                navigate("/");
                            }
                        }}
                    >
                        <span>
                            {userService.user?.token ? "Log out " : "Log in "}
                        </span>
                    </button>
                    {userService.modalFlag && <LoginComponent></LoginComponent>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default HeaderComponent;

/*
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
                                        {userService.user?.token
                                            ? "Basket"
                                            : ""}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/orderHistory"
                                    >
                                        {userService.user?.token
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
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        if (!userService.user) {
                            userService.modalFlag = true;
                        } else {
                            userService.modalFlag = false;
                            userService.Logout();
                            navigate("/");
                        }
                    }}
                >
                    {userService.user?.token ? "Log out" : "Log in"}
                </button>
                {userService.modalFlag && <LoginComponent></LoginComponent>}
            </div>
        </div>
*/
