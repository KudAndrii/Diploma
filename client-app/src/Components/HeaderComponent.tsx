import DK_logo from "../DKlogo.png";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { userService } from "../App";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import LoginComponent from "./LogInComponent";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./HeaderComponent.css";

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
                        id="color-1"
                        className="button-login"
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
