import "../App.css";
import Footer from "../components/Footer";

export const News = () => {
    return (
        <div className="newsContainer">
            <div className="newsMain">
                <h1>Tsochir MEDEE!</h1>
                <h2>Duuchin Bayrsaikhan ehneree jiremsluuljee</h2>
                <img src={require("../images/ishig.png")} alt="" />
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laboriosam, vero molestias placeat soluta ullam expedita sint voluptatibus doloremque, autem non minima culpa adipisci ea repellat architecto. <br /> <br /> Sequi itaque repellendus mollitia facilis omnis provident, aliquid error cupiditate deleniti dolorum temporibus asperiores perferendis, similique, suscipit quasi soluta impedit eius? Itaque deserunt laboriosam earum rerum in repellendus distinctio ratione nihil aliquid fugiat, culpa, fugit corporis. <br /><br /> Dolores voluptatem recusandae deleniti ratione pariatur voluptatum laborum minus, neque molestias dicta in commodi non, cum natus accusantium qui sunt voluptatibus quis. Sed officiis iste quam perspiciatis exercitationem, sequi quod sunt distinctio hic reiciendis facilis consectetur culpa vero repudiandae minima nesciunt eveniet dolorem nihil nemo inventore veritatis doloribus. Fugit ut perferendis provident, magnam vero suscipit qui odit quis similique hic dolorum labore architecto dignissimos iure nulla aut itaque libero molestias earum nemo aliquam cumque optio deserunt tempore. Dolore quaerat amet debitis ipsa eligendi exercitationem velit ut magnam praesentium iure saepe id cumque veritatis ullam quibusdam numquam perferendis rem dignissimos quae quam placeat, eos sit minima corrupti. Doloremque, ab eveniet iure autem quae, temporibus unde laborum vel, nobis harum provident amet dignissimos saepe? Qui, rerum id assumenda commodi, velit reiciendis non maxime aliquid consectetur deserunt minus nostrum vero.</span>
            </div>
            <Footer />
        </div>
    )
}