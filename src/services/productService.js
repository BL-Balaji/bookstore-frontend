import api from "./api";

export const getAllProducts = async () => {

    const response =
        await api.get("/api/products");

    return response.data;
};

export const getProductById =
    async (id) => {

    const response =
        await api.get(
            `/api/products/${id}`
        );

    return response.data;
};

export const searchProducts =
    async (keyword) => {

    const response =
        await api.get(
            `/api/products/search?keyword=${keyword}`
        );

    return response.data;
};