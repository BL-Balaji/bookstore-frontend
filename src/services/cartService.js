import api from "./api";

export const addToCart = async (
    productId
) => {

    const response =
        await api.post(
            "/api/cart/add",
            {
                productId,
                quantity: 1
            }
        );

    return response.data;
};

export const getCart =
    async () => {

    const response =
        await api.get("/api/cart");

    return response.data;
};

export const removeCartItem =
    async (id) => {

    await api.delete(
        `/api/cart/remove/${id}`
    );
};

export const clearCart =
    async () => {

    await api.delete(
        "/api/cart/clear"
    );
};