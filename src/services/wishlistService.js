import api from "./api";

export const getWishlist = async () => {

    const response =
        await api.get("/api/wishlist");

    return response.data;
};

export const removeWishlistItem =
    async (productId) => {

    await api.delete(
        `/api/wishlist/${productId}`
    );
};

export const addToWishlist =
    async (productId) => {

    const response =
        await api.post(
            "/api/wishlist/add",
            { productId }
        );

    return response.data;
};