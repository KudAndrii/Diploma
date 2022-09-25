import "./ComponentsStyles.css";
import DK_logo from "../DKlogo.png";
import { Link, Outlet } from "react-router-dom";

const HeaderComponent = (): JSX.Element => {
    return (
        <div className="header">
            <img src={DK_logo} alt="DK" className="headerDKLogo"></img>
            <div className="login">
                <h1>Online Electronic Store</h1>
                <nav className="navbar navbar-expand">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/catalog">
                                        Catalog
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart">
                                        Shopping Cart
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </div>
            <div className="login">
                <h3 className=" btn btn-primary">Log In</h3>
            </div>
        </div>
    );
};

export default HeaderComponent;
