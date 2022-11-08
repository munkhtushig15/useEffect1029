import "../App.css";
import { Link } from "react-router-dom";
// import Instant from "./Instant";
import { useLocation } from "react-router-dom";
// import { Button } from "react-bootstrap"
// import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  // let link = useLocation();

  // console.log(link.pathname);
  // // link.pathname !== '/' ?  :

  let location = useLocation();
  const styles = {
    navBg:
      location.pathname !== "/" ? { width: 0, height: 100 } : { width: "" },
    navColor:
      location.pathname !== "/" ? { color: "black" } : { color: "white" },
    spclColor:
      location.pathname !== "/"
        ? { color: "#4DA0FD", borderColor: "#4DA0FD" }
        : { "*": "#4DA0FD", borderColor: "#4DA0FD" },
    imgSizeIsHome:
      location.pathname !== "/"
        ? { width: "", height: "60px" }
        : { width: "", height: "" },
  };

  return (
    <div style={styles.navBg} className="headerContainer">
      <header>
        <img
          style={styles.imgSizeIsHome}
          src={
            location.pathname !== "/"
              ? require("../images/teamLogoTwo.png")
              : require("../images/teamLogo.png")
          }
          alt="logo"
        />
        <div className="linkContainer">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <Link style={styles.navColor} className={"colorOfLinks"} to="/">
            Main
          </Link>
          <Link style={styles.navColor} className="colorOfLinks" to="/products">
            Products
          </Link>
          <Link style={styles.navColor} className="colorOfLinks" to="/services">
            Blog
          </Link>
          <Link style={styles.navColor} className="colorOfLinks" to="/contact">
            Contact
          </Link>
          <Link style={styles.navColor} className="colorOfLinks" to="/login">
            Log in
          </Link>
          <Link style={styles.spclColor} className="spclOne" to="/getAccess">
            Get Access
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
