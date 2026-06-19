import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response =
                await login({
                    email,
                    password
                });

            localStorage.setItem(
                "token",
                response.token
            );

            localStorage.setItem(
                "role",
                response.role
            );

            localStorage.setItem(
                "email",
                response.email
            );

            localStorage.setItem(
                "userName",
                response.name
            );

            alert(
                "Login Successful"
            );

            // Redirect after login
            navigate("/");

        } catch (error) {

            alert(
                "Login Failed"
            );

            console.log(error);
        }
    };

    return (

        <div
            className="container"
            style={{
                minHeight: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <div
                className="card shadow-lg p-5"
                style={{
                    width: "450px",
                    borderRadius: "20px"
                }}
            >

                <h2
                    className="text-center mb-4"
                >
                    📚 BookStore Login
                </h2>

                <form
                    onSubmit={handleLogin}
                >

                    <div
                        className="mb-3"
                    >

                        <label>
                            Email
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) =>
                                setEmail(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                    <div
                        className="mb-3"
                    >

                        <label>
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >

                        Login

                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;