// import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Blogger } from "../components/Blogger";
// import { Stack } from "react-bootstrap";
import Footer from "../components/Footer";
// import { useEffect } from "react";

const Services = () => {
  return (
    <div className="ContainerOtherService">
      <header>
        <img
          className="teamLogoStyle"
          src={require("../images/teamLogoTwo.png")}
          alt="logo"
        />
        <div className="linkContainer">
          <Link className="productVersion" to="/">
            Main
          </Link>
          <Link className="productVersion" to="/products">
            Products
          </Link>
          <Link className="productVersion" to="/services">
            Blog
          </Link>
          <Link className="productVersion" to="/contact">
            Contact
          </Link>
          <Link className="productVersion" to="/login">
            Log in
          </Link>
          <Link className="specialOne" to="/getAccess">
            GetAccess
          </Link>
        </div>
      </header>
      
      <div className="blogMain">
        <div className="goodAfter">
          <p>Blog posts</p>
          <span>Our latest updates and blogs about managing your team</span>
        </div>
        <div className="blogsContainer">
          <Blogger
          image={require("../images/BlogImg.png")}
          title="The Emotional Toll of Being in UX"
          texts="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
          profileImg={require("../images/Avatar.png")}
          userName="Wade Warren"
          date="2nd January,2022"
          />
          <Blogger
            image={require("../images/BlogImg.png")}
            title="The Emotional Toll of Being in UX"
            texts="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
            profileImg={require("../images/Avatar.png")}
            userName="Wade Warren"
            date="2nd January,2022"
          />
          <Blogger
            image={require("../images/BlogImg.png")}
            title="The Emotional Toll of Being in UX"
            texts="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
            profileImg={require("../images/Avatar.png")}
            userName="Wade Warren"
            date="2nd January,2022"
          />
        </div>
        <div className="blogsContainer">
          <Blogger
          image={require("../images/BlogImg.png")}
          title="The Emotional Toll of Being in UX"
          texts="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
          profileImg={require("../images/Avatar.png")}
          userName="Wade Warren"
          date="2nd January,2022"
          />
          <Blogger
            image={require("../images/BlogImg.png")}
            title="The Emotional Toll of Being in UX"
            texts="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
            profileImg={require("../images/Avatar.png")}
            userName="Wade Warren"
            date="2nd January,2022"
          />
          <Blogger
            image={require("../images/BlogImg.png")}
            title="The Emotional Toll of Being in UX"
            texts="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
            profileImg={require("../images/Avatar.png")}
            userName="Wade Warren"
            date="2nd January,2022"
          />
        </div>
        <div className="blogsContainer">
          <Blogger
          image={require("../images/BlogImg.png")}
          title="The Emotional Toll of Being in UX"
          texts="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
          profileImg={require("../images/Avatar.png")}
          userName="Wade Warren"
          date="2nd January,2022"
          />
          <Blogger
            image={require("../images/BlogImg.png")}
            title="The Emotional Toll of Being in UX"
            texts="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
            profileImg={require("../images/Avatar.png")}
            userName="Wade Warren"
            date="2nd January,2022"
          />
          <Blogger
            image={require("../images/BlogImg.png")}
            title="The Emotional Toll of Being in UX"
            texts="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
            profileImg={require("../images/Avatar.png")}
            userName="Wade Warren"
            date="2nd January,2022"
          />
        </div>
        <button className="btnSrvc">Next</button>
        <br />
      </div>
      <Footer />
    </div>
  );
};
export default Services;
