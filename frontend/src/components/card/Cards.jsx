import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cards.scss";
import { IoStarOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "../../redux/features/ProductSlice";
import { addBasket } from "../../redux/features/Basket";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { addWish, deleteWish } from "../../redux/features/Wishlist";
import { useNavigate } from "react-router";

function BasicExample() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const addToBasket = (e, product) => {
    e.stopPropagation();
    dispatch(addBasket(product));
  };

  const [heart, setHeart] = useState(false);
  const toggle = () => {
    setHeart(!heart);
  };

  const addToWish = (e, product) => {
    e.stopPropagation();
    dispatch(addWish(product));
  };

  const removeFromWish = (e, product) => {
    e.stopPropagation();
    dispatch(deleteWish(product));
  };

  const navigate = useNavigate();
  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <div className="card-header">
        <div className="card-header-left">
          <h1>Latest Products</h1>
        </div>
        <ul className="card-header-right">
          <li>All</li>
          <li>New</li>
          <li>Featured</li>
          <li>Offer</li>
        </ul>
      </div>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-4" key={product._id}>
              {heart ? (
                <FaHeart
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={(e) => {
                    toggle(), removeFromWish(e, product);
                  }}
                />
              ) : (
                <CiHeart
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    toggle(), addToWish(e, product);
                  }}
                />
              )}
              <Card
                style={{ width: "18rem", cursor: "pointer" }}
                onClick={() => handleCardClick(product._id)}
              >
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Text
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                  </Card.Text>
                  <Card.Title
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    {product.title}
                  </Card.Title>
                  <Card.Text
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <span>$40 </span>
                    <span>${product.price}</span>
                  </Card.Text>
                  <Button
                    onClick={(e) => {
                      addToBasket(e, product);
                    }}
                    variant="primary"
                  >
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BasicExample;
