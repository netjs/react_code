import { useState } from "react";
import { Link, Outlet } from "react-router";

const Navigation = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const queryParams = new URLSearchParams(location.search);
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(event.target.searchInput.value);
//         const searchText = event.target.searchInput.value;
//         console.log('searchText- ', searchText);
//         event.target.reset();
//         queryParams.set("filter", searchText);
//         navigate({
//             pathname: "productsearch",search: queryParams.toString() });
//     }
    // return(
    //     <nav>
    //         <Link to="/">Home</Link>
    //         <Link to="/about">About</Link>
    //     </nav>
    // );
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
                        {/* <form className="d-flex" onSubmit={handleSubmit}>
                    <input className="form-control me-2" type="search" id="searchInput" name="searchInput" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Navigation;