import "../App.css";
import { Link } from "react-router-dom";

export const Blogger = ({image, title, texts, profileImg, userName, date}) => {
    return (
        <div className="blogContainer">
            <img src={image} alt={image} />
            <Link className="productVersion" to="/products">
                <h2>{title}</h2>
            </Link>
            <span>{texts}</span>
            <div className="blogProfileContainer">
                <img src={profileImg} alt={profileImg} />
                <p>{userName}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}