import { Link, Outlet } from "react-router";

export const DUMMY_PRODUCTS = [
    {id:1, name:'Laptop', price:455.50},
    {id:2, name:'Mouse', price:15.89},
    {id:3, name:'USB', price:10.00},
    {id:4, name:'HDD', price:55.50}
];

const RouteProduct = () => {

    return(
        <>
        <div className= "row">
            <div className="col-sm-4">
                <h2>Products</h2>
 
                <ul className="list-group">

                    //loop array here with link for each id
                </ul>

            </div>
            <div className="col-sm-4">
                <Outlet />
            </div>
        </div>
        </>
    )
}

export default RouteProduct;