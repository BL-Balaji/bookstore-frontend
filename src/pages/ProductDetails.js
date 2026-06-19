import {
    useParams
}
from "react-router-dom";

import {
    useEffect,
    useState
}
from "react";

import {
    getProductById
}
from "../services/productService";

import {
    addToCart
}
from "../services/cartService";

import {
    addToWishlist
}
from "../services/wishlistService";

import "./ProductDetails.css";

function ProductDetails() {

    const { id } =
        useParams();

    const [product,
        setProduct]
        = useState(null);

    useEffect(() => {

        fetchProduct();

    }, []);

    const fetchProduct =
        async () => {

        try {

            const data =
                await getProductById(id);

            setProduct(data);

        } catch(error) {

            console.log(error);
        }
    };

    const handleCart =
        async () => {

        try {

            await addToCart(id);

            alert(
                "Added To Cart"
            );

        } catch(error) {

            console.log(error);
        }
    };

    const handleWishlist =
        async () => {

        try {

            await addToWishlist(id);

            alert(
                "Added To Wishlist"
            );

        } catch(error) {

            console.log(error);
        }
    };

    const handleBuyNow = () => {

        alert(
            "Proceeding To Checkout"
        );

        // Later:
        // navigate("/checkout");
    };

    if (!product) {

        return (
            <h2>
                Loading...
            </h2>
        );
    }

    const oldPrice =
        product.price + 200;

    const discount =
        Math.round(
            ((oldPrice -
            product.price)
            / oldPrice) * 100
        );

    return (

        <div
            className=
            "container product-details-container"
        >

            <div className="row">

                {/* Product Image */}

                <div
                    className="col-lg-5"
                >

                    <img
                        src={
                            product.imageUrl &&
                            product.imageUrl.startsWith("http")
                                ? product.imageUrl
                                : "https://picsum.photos/500/700"
                        }
                        alt={
                            product.title
                        }
                        className=
                        "product-image-large"
                    />

                </div>

                {/* Product Details */}

                <div
                    className="col-lg-7"
                >

                    <div
                        className=
                        "product-info"
                    >

                        <h1
                            className=
                            "product-title"
                        >

                            {product.title}

                        </h1>

                        <p
                            className=
                            "product-author"
                        >

                            Author :
                            {" "}
                            {product.author}

                        </p>

                        <div
                            className=
                            "product-rating"
                        >

                            ⭐⭐⭐⭐⭐

                            <span
                                className=
                                "ms-2"
                            >

                                (4.5)

                            </span>

                        </div>

                        <div
                            className="mb-3"
                        >

                            <span
                                className=
                                "product-price"
                            >

                                ₹
                                {product.price}

                            </span>

                            <span
                                className=
                                "old-price"
                            >

                                ₹
                                {oldPrice}

                            </span>

                        </div>

                        <div
                            className=
                            "text-danger fw-bold"
                        >

                            {discount}% OFF

                        </div>

                        <div
                            className=
                            "stock"
                        >

                            ✅ In Stock

                        </div>

                        <hr />

                        <div
                            className=
                            "mt-4"
                        >

                            <button
                                className=
                                "btn btn-warning me-2"
                                onClick={
                                    handleCart
                                }
                            >

                                🛒 Add To Cart

                            </button>

                            <button
                                className=
                                "btn btn-success me-2"
                                onClick={
                                    handleBuyNow
                                }
                            >

                                ⚡ Buy Now

                            </button>

                            <button
                                className=
                                "btn btn-danger"
                                onClick={
                                    handleWishlist
                                }
                            >

                                ❤️ Wishlist

                            </button>

                        </div>

                    </div>

                </div>

            </div>

            {/* Description */}

            <div
                className=
                "description-card"
            >

                <h3>
                    📖 Description
                </h3>

                <hr />

                <p>

                    Learn
                    {" "}
                    {product.title}
                    {" "}
                    from basics to advanced
                    concepts with practical
                    examples and real-world
                    applications.

                </p>

            </div>

            {/* Product Information */}

            <div
                className=
                "description-card mt-4"
            >

                <h3>
                    📚 Product Information
                </h3>

                <hr />

                <p>

                    <strong>
                        Title:
                    </strong>

                    {" "}
                    {product.title}

                </p>

                <p>

                    <strong>
                        Author:
                    </strong>

                    {" "}
                    {product.author}

                </p>

                <p>

                    <strong>
                        Price:
                    </strong>

                    {" "}
                    ₹{product.price}

                </p>

                <p>

                    <strong>
                        Availability:
                    </strong>

                    {" "}
                    In Stock

                </p>

            </div>

        </div>
    );
}

export default ProductDetails;