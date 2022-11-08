import Header from "../components/Header";
import Activities from "../components/Activities";
import ActivitiesTwo from "../components/ActivitiesTwo";
import Comments from "../components/Comments";
import Instant from "../components/Instant";
import Footer from "../components/Footer";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container, Row, Col} from "react-bootstrap"

export const Main = () => {
  return (
    <div className="mainContainer">
        <Instant
        title="Instant collaborations for remote teams"
        text="All in one for your remote team chats, 
        collaboration and track projects"
      />
      <Activities
        Texts={
          "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        }
        Title="Your Hub for teamwork"
        Image={require("../images/niceOne.png")}
      />
      <ActivitiesTwo
        TextsTwo={
          "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        }
        TitleTwo="Simple task management"
        ImageTwo={require("../images/niceTwo.png")}
      />
      <Activities
        Texts={
          "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        }
        Title="Scheduling that actually works"
        Image={require("../images/niceThree.png")}
      />
      <Comments />
      <Footer />
    </div>
  );
};
