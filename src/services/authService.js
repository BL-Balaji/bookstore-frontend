import api from "./api";

export const login = async (data) => {

    const response =
        await api.post(
            "/api/users/login",
            data
        );

    return response.data;
};

export const register = async (data) => {

    const response =
        await api.post(
            "/api/users/register",
            data
        );

    return response.data;
};