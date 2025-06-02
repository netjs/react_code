import { Link, Outlet } from "react-router";

const Navigation = () => {
    return(
        <>
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/product">
                            Product
                        </Link>
                    </li> */}
                </ul>
              </div>
            </div>
          </nav>
          <Outlet />
      </>
    );
}

export default Navigation;