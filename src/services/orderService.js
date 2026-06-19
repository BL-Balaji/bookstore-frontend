import api from "./api";

export const getMyOrders =
    async () => {

    const response =
        await api.get(
            "/api/orders/my"
        );

    return response.data;
};

export const cancelOrder =
    async (id) => {

    await api.put(
        `/api/orders/cancel/${id}`
    );
};

export const placeOrder =
    async (addressId) => {

    const response =
        await api.post(
            "/api/orders",
            { addressId }
        );

    return response.data;
};