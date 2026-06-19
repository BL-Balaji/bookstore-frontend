import { useEffect, useState } from "react";

import { getAllProducts }
from "../services/productService";

import { Link }
from "react-router-dom";

function TrendingBooks() {

    const [books,
        setBooks]
        = useState([]);

    useEffect(() => {

        loadBooks();

    }, []);

    const loadBooks =
        async () => {

        try {

            const data =
                await getAllProducts();

            setBooks(
                data.slice(0, 4)
            );

        } catch(error) {

            console.log(error);
        }
    };

    return (

        <div className="container mt-5">

            <h2 className="mb-4">
                🔥 Trending Books
            </h2>

            <div className="row">

                {
                    books.map(book => (

                        <div
                            className="
                            col-lg-3
                            col-md-6
                            mb-4"
                            key={book.id}
                        >

                            <div
                                className="
                                card
                                shadow-sm
                                border-0
                                h-100"
                            >

                                <img
                                    src={
                                        book.imageUrl ||
                                        "https://picsum.photos/300/400"
                                    }
                                    alt={
                                        book.title
                                    }
                                    className="
                                    card-img-top"
                                    style={{
                                        height:
                                        "250px",
                                        objectFit:
                                        "cover"
                                    }}
                                />

                                <div
                                    className=
                                    "card-body"
                                >

                                    <h5>
                                        {
                                          book.title
                                        }
                                    </h5>

                                    <p
                                      className=
                                      "text-muted"
                                    >
                                        ₹
                                        {book.price}
                                    </p>

                                    <Link
                                        to={
                                          `/product/${book.id}`
                                        }
                                        className="
                                        btn
                                        btn-primary
                                        w-100"
                                    >
                                        View Book
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    );
}

export default TrendingBooks;