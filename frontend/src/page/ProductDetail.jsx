import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { IoStar, IoStarOutline } from "react-icons/io5";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);

  const product = products.find((product) => product._id === id);

  if (!product) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontSize: "24px",
          color: "#FF6347",
        }}
      >
        Product not found
      </div>
    );
  }

  return (
    <div
      style={{ padding: "20px", fontFamily: "'Helvetica Neue', sans-serif" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            maxWidth: "600px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        {product.title}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div style={{ flex: "1", padding: "20px" }}>
          <p style={{ fontSize: "24px", color: "#666" }}>
            Price:{" "}
            <span style={{ color: "#000", fontWeight: "bold" }}>
              ${product.price}
            </span>
          </p>
          <p style={{ fontSize: "18px", color: "#888", marginBottom: "20px" }}>
            {product.category}
          </p>
          <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
            {product.description}
          </p>
          <div style={{ marginTop: "20px" }}>
            <Button
              variant="success"
              style={{ width: "150px", fontSize: "16px" }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
        <div style={{ flex: "1", padding: "20px" }}>
          <h3 style={{ color: "#333", marginBottom: "20px" }}>
            Customer Reviews
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              marginBottom: "10px",
            }}
          >
            <IoStar color="#FFD700" />
            <IoStar color="#FFD700" />
            <IoStar color="#FFD700" />
            <IoStar color="#FFD700" />
            <IoStarOutline color="#FFD700" />
            <p style={{ marginLeft: "10px", color: "#777" }}>4.0 out of 5</p>
          </div>
          <p style={{ color: "#777", fontStyle: "italic" }}>
            No reviews yet. Be the first to write a review!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
