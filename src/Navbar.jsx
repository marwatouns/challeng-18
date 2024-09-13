import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#060047",
  };

  const totale = useSelector((state) => state.reCart.totalItems);

  return (
    <nav style={navbarStyle}>
      <Link to="/" className="single-link">
        <h2>Home</h2>
      </Link>
      <Link to="/shopping" className="single-link">
        <h2>Shopping</h2>
      </Link>
      <Link to="/cart" className="single-link">
        <h2>Crta {totale}</h2>
      </Link>
    </nav>
  );
}

export default Navbar;
