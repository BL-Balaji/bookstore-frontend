import {
    useEffect,
    useState
}
from "react";

import {
    getMyOrders,
    cancelOrder
}
from "../services/orderService";

import "./Orders.css";

function Orders() {

    const [orders,
        setOrders]
        = useState([]);

    useEffect(() => {

        fetchOrders();

    }, []);

    const fetchOrders =
        async () => {

        try {

            const data =
                await getMyOrders();

            setOrders(data);

        } catch(error) {

            console.log(error);
        }
    };

    const handleCancel =
        async (id) => {

        try {

            await cancelOrder(id);

            alert(
                "Order Cancelled"
            );

            fetchOrders();

        } catch(error) {

            console.log(error);
        }
    };

    const getStatusClass =
        (status) => {

        if(status === "PENDING")
            return "pending";

        if(status === "COMPLETED")
            return "completed";

        if(status === "CANCELLED")
            return "cancelled";

        return "";
    };

    return (

        <div
            className=
            "container orders-container"
        >

            <h2 className="mb-4">
                📦 My Orders
            </h2>

            {
                orders.map(order => (

                    <div
                        className=
                        "order-card"
                        key={
                            order.orderId
                        }
                    >

                        <div
                            className=
                            "order-header"
                        >

                            <h4>
                                Order #
                                {
                                    order.orderId
                                }
                            </h4>

                            <span
                                className={
                                    `status-badge ${getStatusClass(
                                        order.status
                                    )}`
                                }
                            >
                                {
                                    order.status
                                }
                            </span>

                        </div>

                        <hr />

                        <p>
                            Order Date:
                            {" "}
                            {
                                order.orderDate
                            }
                        </p>

                        <p
                            className=
                            "order-total"
                        >
                            ₹
                            {
                                order.totalAmount
                            }
                        </p>

                        {
                            order.status !==
                            "CANCELLED" && (

                                <button
                                    className=
                                    "btn btn-danger"
                                    onClick={() =>
                                        handleCancel(
                                            order.orderId
                                        )
                                    }
                                >
                                    Cancel Order
                                </button>

                            )
                        }

                    </div>

                ))
            }

        </div>
    );
}

export default Orders;