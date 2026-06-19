import { Link }
from "react-router-dom";

import {
    FaBox,
    FaList,
    FaShoppingCart,
    FaUsers
}
from "react-icons/fa";

import "./AdminDashboard.css";

function AdminDashboard() {

    return (

        <div
            className=
            "container admin-container"
        >

            <h1
                className="mb-4"
            >
                📊 Admin Dashboard
            </h1>

            {/* Statistics Cards */}

            <div className="row mb-4">

                <div
                    className="col-md-3"
                >

                    <div
                        className=
                        "dashboard-card card-blue"
                    >

                        <h2>25</h2>

                        <h5>
                            Products
                        </h5>

                    </div>

                </div>

                <div
                    className="col-md-3"
                >

                    <div
                        className=
                        "dashboard-card card-green"
                    >

                        <h2>8</h2>

                        <h5>
                            Categories
                        </h5>

                    </div>

                </div>

                <div
                    className="col-md-3"
                >

                    <div
                        className=
                        "dashboard-card card-orange"
                    >

                        <h2>150</h2>

                        <h5>
                            Orders
                        </h5>

                    </div>

                </div>

                <div
                    className="col-md-3"
                >

                    <div
                        className=
                        "dashboard-card card-red"
                    >

                        <h2>40</h2>

                        <h5>
                            Users
                        </h5>

                    </div>

                </div>

            </div>

            {/* Quick Links */}

            <div className="row">

                <div
                    className="col-md-3 mb-4"
                >

                    <Link
                        to="/admin/products"
                        style={{
                            textDecoration:
                            "none"
                        }}
                    >

                        <div
                            className=
                            "quick-link-card"
                        >

                            <FaBox
                                className=
                                "quick-link-icon"
                            />

                            <h5>
                                Manage Products
                            </h5>

                        </div>

                    </Link>

                </div>

                <div
                    className="col-md-3 mb-4"
                >

                    <Link
                        to="/admin/categories"
                        style={{
                            textDecoration:
                            "none"
                        }}
                    >

                        <div
                            className=
                            "quick-link-card"
                        >

                            <FaList
                                className=
                                "quick-link-icon"
                            />

                            <h5>
                                Categories
                            </h5>

                        </div>

                    </Link>

                </div>

                <div
                    className="col-md-3 mb-4"
                >

                    <Link
                        to="/admin/orders"
                        style={{
                            textDecoration:
                            "none"
                        }}
                    >

                        <div
                            className=
                            "quick-link-card"
                        >

                            <FaShoppingCart
                                className=
                                "quick-link-icon"
                            />

                            <h5>
                                Orders
                            </h5>

                        </div>

                    </Link>

                </div>

                <div
                    className="col-md-3 mb-4"
                >

                    <div
                        className=
                        "quick-link-card"
                    >

                        <FaUsers
                            className=
                            "quick-link-icon"
                        />

                        <h5>
                            Users
                        </h5>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AdminDashboard;