import { Link } from "react-router-dom";

function OrderSuccess() {

    return (

        <div className="container text-center mt-5">

            <h1 className="text-success">
                ✅ Order Placed Successfully
            </h1>

            <p className="mt-3">
                Thank you for shopping with us.
            </p>

            <Link
                to="/orders"
                className="btn btn-primary mt-3"
            >
                View My Orders
            </Link>

        </div>
    );
}

export default OrderSuccess;