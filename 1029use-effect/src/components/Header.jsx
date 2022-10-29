import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContainer">
      <header>
        <img src={require("../images/teamLogo.png")} alt="" />
        <div>
            <Link className="color" to="/products">
                Products
            </Link>
            <Link className="color" to="/services">
                Services
            </Link>
            <Link className="color" to="/contact">
                Contact
            </Link>
            <Link className="color" to="/login">
                Log in
            </Link>
            <Link className="spclOne" to="/getAccess">
            Get Access
            </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
