import "./Payment.css";

import { useLocation, useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const location = useLocation();

  const amount = location.state?.amount || 0;

  const handlePaymentSuccess = () => {
    navigate("/order-success");
  };

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h2 className="payment-title">🔒 Secure Payment</h2>

        <p className="payment-subtitle">Complete your payment using UPI</p>

        <div className="amount-box">
          <h4>Total Amount</h4>

          <h1>₹{amount}</h1>
        </div>

        <img src="/upi-qr.png" alt="UPI QR" className="payment-qr" />

        <p className="scan-text">Scan using PhonePe / Google Pay / Paytm</p>

        <button
          className="btn btn-success btn-lg w-100"
          onClick={handlePaymentSuccess}
        >
          Payment Completed
        </button>
      </div>
    </div>
  );
}

export default Payment;
