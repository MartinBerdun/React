import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "../Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ">
          <Link className="link" to="/">St Marthin </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse position-relative"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav position-absolute top-50 start-50 translate-middle link">
              <Link className="link" to="/category/1">INVIERNO</Link>
              <Link className="link" to="/category/2">VERANO</Link>
              <Link className="link" to="/category/3">ACCESORIOS</Link>
            </div>
          </div>
        </div>
        {/* <CartWidget/> */}
        <Link to='/cart'><CartWidget /></Link>
      </nav>
    </div>
  );
};

export default Navbar;
