import { useEffect, useState } from "react";

import { getCart, clearCart } from "../services/cartService";

import "./Cart.css";

import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const data = await getCart();

      setCart(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClear = async () => {
    try {
      await clearCart();

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckout = () => {
    navigate("/payment", {
      state: {
        amount: cart.totalAmount,
      },
    });
  };

  if (!cart) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container cart-container">
      <h2 className="mb-4">🛒 My Cart</h2>

      <div className="row">
        <div className="col-md-8">
          {cart.items?.map((item) => (
            <div className="cart-item" key={item.productId}>
              <div className="row">
                <div className="col-md-3">
                  <img
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
                    alt=""
                    className="cart-image"
                  />
                </div>

                <div className="col-md-9">
                  <h4>{item.title}</h4>

                  <p>Quantity :{item.quantity}</p>

                  <h5>₹{item.itemTotal}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-4">
          <div className="cart-total-card">
            <h3>Order Summary</h3>

            <hr />

            <h4>Total : ₹{cart.totalAmount}</h4>

            <div className="d-grid gap-2 mt-3">
              <button
                className="btn btn-success"
                onClick={() =>
                  navigate("/payment", {
                    state: {
                      amount: totalAmount,
                    },
                  })
                }
              >
                Proceed To Payment
              </button>

              <button className="btn btn-danger" onClick={handleClear}>
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
