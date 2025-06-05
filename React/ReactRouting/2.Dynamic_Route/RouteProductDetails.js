import { useParams } from "react-router"
import { DUMMY_PRODUCTS } from "./RouteProduct";

const RouteProductDetails = () => {
    //get product by ID - useParams() hook and use find method
    return (
        <>
            <h2>Product Details</h2>
            <div className="row">
                <div className="col-xs-6">
                    <span>Name: </span>{product.name}
                </div>
            </div>
            <div className="row">
                <div className="col-xs-6">
                    <span>Price: </span>{product.price}
                </div>

            </div>
        </>
    )
}

export default RouteProductDetails;