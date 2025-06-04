import { NavLink, Outlet } from "react-router";
import "./navigation.css";
const NavigationNavLink = () => {
    const style = (({ isActive, isPending }) => 
        isPending ? "pending" : isActive ? "active" : ""
    );
    return(
        <>
            <nav id="menu" className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav">
                            <li>
                                <NavLink className={style} to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={style} to="/product">
                                    Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={style} to="/about">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default NavigationNavLink;