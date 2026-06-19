import api from "./api";

export const getAddresses =
    async () => {

    const response =
        await api.get(
            "/api/customer/address"
        );

    return response.data;
};

export const addAddress =
    async (data) => {

    const response =
        await api.post(
            "/api/customer/address",
            data
        );

    return response.data;
};