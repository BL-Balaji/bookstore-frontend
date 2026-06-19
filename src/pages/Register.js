import { useState } from "react";
import { register } from "../services/authService";
import "./Register.css";

function Register() {

    const [name, setName] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const handleRegister =
        async (e) => {

        e.preventDefault();

        try {

            await register({
                name,
                email,
                password
            });

            alert(
                "Registration Successful"
            );

        } catch (error) {

            alert(
                "Registration Failed"
            );
        }
    };

   return (
  <div className="register-page">

    <div className="register-card">

      <h2 className="register-title">
        Create Account
      </h2>

      <p className="register-subtitle">
        Join BookStore Today 📚
      </p>

      <form onSubmit={handleRegister}>

        <div className="mb-3">

          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

        </div>

        <div className="mb-3">

          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

        </div>

        <div className="mb-4">

          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

        </div>

        <button
          type="submit"
          className="btn btn-primary btn-lg w-100"
        >
          Register
        </button>

      </form>

      <div className="text-center mt-4">

        Already have an account?

        <a
          href="/login"
          className="ms-2"
        >
          Login
        </a>

      </div>

    </div>

  </div>
);
}

export default Register;