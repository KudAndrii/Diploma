import "./ComponentsStyles.css";
import DK_logo from "../DKlogo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { userService } from "../App";
import { observer } from "mobx-react-lite";
/*
const HeaderComponent = observer((): JSX.Element => {
    const navigate = useNavigate();

    return (
        <>
<div className="form-signin w-100 m-auto">
  <form>
    <img className="mb-4" src="./Signin Template · Bootstrap v5.2_files/bootstrap-logo.svg" alt="" width="72" height="57">
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
  </form>
</main>
        </>
    );
});

export default HeaderComponent;


*/
