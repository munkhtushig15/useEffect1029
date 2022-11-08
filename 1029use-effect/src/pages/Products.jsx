import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import "../App.css";

export class Products extends PureComponent {
  render() {
    return (
      <>
        <div className="ContainerOther">
          {/* <header>
            <img className='teamLogoStyle' src={require("../images/teamLogoTwo.png")} alt="logo" />
            <div className="linkContainer">
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
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
          </header> */}
          <div className="productPost">
            <h1>10 Secrets for managing a remote team</h1>
            <div className="userInfo">
              <img src={require("../images/Avatar (4).png")} alt="userImg" />
              <span>Shedrack eze</span>
              <br />
              <span>2nd January,2022</span>
            </div>
            <img src={require('../images/productsIMG.png')} alt="" />
            <p className='productTexts'>
              If you’re thinking of starting a blog of your own, but just don’t have a clue on what to blog about, then fear not!
              <br />
              <br />
              In this article, I have included a whole load of blog examples from a wide variety of different niches, all run on different blogging platforms like WordPress, Joomla! and Drupal.
              <br />
              <br />
              Since the beginning of the internet, millions and millions and millions of blogs have been created. Many have died due to lost interest or their owners giving up on the idea, while others have thrived and continue to grow, making money and earning their owners a steady income. It’s a constant evolution of content that keeps people coming back for more, especially if these blogs contact highly resourceful material that people find useful and interesting.
              <br />
              <br />
              Each example listed in this blog post are all different in some way and all bring something unique to their readers & subscribers. I want to show you what is possible and how you can take inspiration from them and create an awesome blog of your own.
              <br />
              <br />
              Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.
              Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and 
              <br />
              Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.
              Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.
            </p>
            <div className="userInfoBottom">
              <img src={require("../images/Avatar (4).png")} alt="userImg" />
              <div className="madeBy">
                <span>Writen By</span>
                <p>Shedrack Eze</p>
                <div>CEO Team App</div>
              </div>
            </div>
            <br />
            <span className='neva'>Join the conversation</span>
            <div className="commit">
              <img src={require('../images/Avatar (5).png')} alt="avatarUser" />
              <textarea placeholder='Comments' name="feedBack" id="feedBack" cols="65" rows="6"></textarea>
            </div>
          </div>
        </div>
        <Footer/>    
      </>
    )
  }
}

export default Products