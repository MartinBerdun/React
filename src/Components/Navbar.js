import CartWidget from "./CartWidget";

const Navbar = () =>{
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
        <a href="/#" className="navbar-brand">St Store</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse position-relative" id="navbarNavAltMarkup">
        <div className="navbar-nav position-absolute top-50 start-50 translate-middle">
        <a href="/#" className="nav-link " aria-current="page" >Home</a>
        <a href="/#" className="nav-link" >Productos</a>
        <a href="/#" className="nav-link" >Promociones</a>
        </div>
        </div>
        </div>
        <CartWidget/>
      </nav>
    </div>
    
  )
}

export default Navbar;
