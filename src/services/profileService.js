import api from "./api";

export const getProfile = async () => {

    const response =
        await api.get(
            "/api/customer/profile"
        );

    return response.data;
};

export const createProfile =
    async (data) => {

    const response =
        await api.post(
            "/api/customer/profile",
            data
        );

    return response.data;
};