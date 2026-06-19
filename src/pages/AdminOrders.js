import {
    useEffect,
    useState
}
from "react";

import {
    getAllOrders
}
from "../services/adminOrderService";

function AdminOrders() {

    const [orders,
        setOrders]
        = useState([]);

    useEffect(() => {

        loadOrders();

    }, []);

    const loadOrders =
        async () => {

        const data =
            await getAllOrders();

        setOrders(data);
    };

    return (

        <div>

            <h2>
                All Orders
            </h2>

            {
                orders.map(order => (

                    <div
                        key={order.orderId}
                    >

                        <h3>
                            Order #
                            {order.orderId}
                        </h3>

                        <p>
                            Status :
                            {order.status}
                        </p>

                        <p>
                            User :
                            {order.userEmail}
                        </p>

                    </div>

                ))
            }

        </div>
    );
}

export default AdminOrders;