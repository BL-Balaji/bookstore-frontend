import {
    useEffect,
    useState
}
from "react";

import {
    getWishlist,
    removeWishlistItem
}
from "../services/wishlistService";

import {
    addToCart
}
from "../services/cartService";

import {
    FaHeart,
    FaShoppingCart
}
from "react-icons/fa";

import "./Wishlist.css";

function Wishlist() {

    const [wishlist,
        setWishlist]
        = useState(null);

    useEffect(() => {

        fetchWishlist();

    }, []);

    const fetchWishlist =
        async () => {

        try {

            const data =
                await getWishlist();

            setWishlist(data);

        } catch(error) {

            console.log(error);
        }
    };

    const handleRemove =
        async (productId) => {

        await removeWishlistItem(
            productId
        );

        fetchWishlist();
    };

    const handleMoveToCart =
        async (productId) => {

        try {

            await addToCart(
                productId
            );

            alert(
                "Added To Cart"
            );

        } catch(error) {

            console.log(error);
        }
    };

    return (

        <div
            className=
            "container wishlist-container"
        >

            <h2 className="mb-4">
                ❤️ My Wishlist
            </h2>

            <div className="row">

                {
                    wishlist?.items?.map(
                        item => (

                        <div
                            className=
                            "col-lg-3 col-md-4 col-sm-6 mb-4"
                            key={
                                item.productId
                            }
                        >

                            <div
                                className=
                                "card wishlist-card"
                            >

                                <img
                                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
                                    alt=""
                                    className=
                                    "wishlist-image"
                                />

                                <div
                                    className=
                                    "card-body"
                                >

                                    <h5>
                                        {
                                            item.title
                                        }
                                    </h5>

                                    <p
                                        className=
                                        "price"
                                    >
                                        ₹
                                        {
                                            item.price
                                        }
                                    </p>

                                    <div
                                        className=
                                        "d-flex justify-content-between"
                                    >

                                        <button
                                            className=
                                            "btn btn-success"
                                            onClick={() =>
                                                handleMoveToCart(
                                                    item.productId
                                                )
                                            }
                                        >

                                            <FaShoppingCart />

                                        </button>

                                        <button
                                            className=
                                            "btn btn-danger"
                                            onClick={() =>
                                                handleRemove(
                                                    item.productId
                                                )
                                            }
                                        >

                                            <FaHeart />

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    );
}

export default Wishlist;