import { useDispatch } from "react-redux";
import { actionsCart } from "./Store/Store";

function Product({ image, name, price, id }) {
  const productStyle = {
    display: "flex",
    flexDirection: "column",
    height: "200px",
    padding: "20px",
  };

  const dispatch = useDispatch();

  let addToCart = () => {
    const itemToSend = {
      name: name,
      id: id,
      price: price,
    };

    dispatch(actionsCart.addInCart(itemToSend));
  };

  return (
    <div className="product-card" style={productStyle}>
      <img
        src={image}
        alt="product"
        style={{ width: "250px", height: "100px" }}
      ></img>
      <h2 style={{ textAlign: "center" }}>{name}</h2>
      <span style={{ textAlign: "center" }}>{price} £</span>
      <button onClick={() => addToCart()}>Add to Cart</button>
    </div>
  );
}

export default Product;
