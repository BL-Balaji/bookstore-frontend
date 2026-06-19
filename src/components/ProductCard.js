import { Link } from "react-router-dom";

import "./ProductCard.css";

function ProductCard({ product }) {
  const oldPrice = product.price + 200;

  const discount = Math.round(((oldPrice - product.price) / oldPrice) * 100);

  return (
    <div className="card product-card">
      <img
        src={`http://localhost:8082${product.imageUrl}`}
        alt={product.title}
        className="product-image"
      />

      <div className="card-body">
        <h5 className="product-title">{product.title}</h5>

        <p className="product-author">{product.author}</p>

        <div className="rating">
          ⭐⭐⭐⭐☆
          <span className="ms-2">4.5</span>
        </div>

        <div className="mt-2">
          <span className="product-price">₹{product.price}</span>

          <span className="old-price">₹{oldPrice}</span>
        </div>

        <div className="discount">{discount}% OFF</div>

        <Link
          to={`/product/${product.id}`}
          className="btn btn-primary w-100 mt-3"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
