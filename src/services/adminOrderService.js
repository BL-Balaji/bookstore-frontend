import api from "./api";

export const getAllOrders =
    async () => {

    const response =
        await api.get(
            "/api/orders/all"
        );

    return response.data;
};