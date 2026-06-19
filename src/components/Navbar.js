import { Link, useNavigate } from "react-router-dom";

import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaBook,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Navbar.css";

function Navbar({ keyword, setKeyword }) {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const role = localStorage.getItem("role");

  const userName = localStorage.getItem("userName");

  const logout = () => {
    localStorage.clear();

    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <FaBook /> BookStore
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Search Box */}

          <div className="mx-auto">
            <input
              type="text"
              className="form-control search-box"
              placeholder="🔍 Search books..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>

          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    <FaUser /> Profile
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/address">
                    Address
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <FaShoppingCart /> Cart
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/wishlist">
                    <FaHeart /> Wishlist
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/orders">
                    Orders
                  </Link>
                </li>
              </>
            )}

            {role === "ROLE_ADMIN" && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin Dashboard
                </Link>
              </li>
            )}

            {token && (
              <li className="nav-item">
                <span className="nav-link fw-bold text-warning">
                  👋 Hi, {userName || "User"}
                </span>
              </li>
            )}

            {!token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="btn btn-danger ms-2" onClick={logout}>
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
