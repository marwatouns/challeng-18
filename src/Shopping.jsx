import { data } from "./Data";
import Product from "./Product";

function Shopping() {
  const shoppingStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
  };
  return (
    <div style={shoppingStyle}>
      {data.map(({ id, url, price, name }, index) => {
        return (
          <Product key={index} image={url} price={price} name={name} id={id} />
        );
      })}
    </div>
  );
}

export default Shopping;
