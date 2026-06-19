import {
    useEffect,
    useState
}
from "react";

import {
    getProducts,
    deleteProduct
}
from "../services/adminProductService";

function AdminProducts() {

    const [products,
        setProducts]
        = useState([]);

    useEffect(() => {

        loadProducts();

    }, []);

    const loadProducts =
        async () => {

        const data =
            await getProducts();

        setProducts(data);
    };

    const handleDelete =
        async (id) => {

        await deleteProduct(id);

        loadProducts();
    };

    return (

        <div>

            <h2>
                Product Management
            </h2>

            {
                products.map(product => (

                    <div
                        key={product.id}
                    >

                        <h3>
                            {product.title}
                        </h3>

                        <button
                            onClick={() =>
                                handleDelete(
                                    product.id
                                )
                            }
                        >
                            Delete
                        </button>

                    </div>

                ))
            }

        </div>
    );
}

export default AdminProducts;