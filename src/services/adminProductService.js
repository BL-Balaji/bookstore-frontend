import api from "./api";

export const getProducts =
    async () => {

    const response =
        await api.get(
            "/api/products"
        );

    return response.data;
};

export const deleteProduct =
    async (id) => {

    await api.delete(
        `/api/products/${id}`
    );
};