import "../App.css";

export const Blogger = ({image, title, texts, profileImg, userName, date}) => {
    return (
        <div className="blogContainer">
            <img src={image} alt={image} />
            <h2>{title}</h2>
            <span>{texts}</span>
            <div className="blogProfileContainer">
                <img src={profileImg} alt={profileImg} />
                <p>{userName}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}