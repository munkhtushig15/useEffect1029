// import logo from './logo.svg';
// import './App.css';
// import Stopwatch from './components/timer';

// function App() {
//   return (
//     <Stopwatch  />
//   );
// }

// export default App;


import './App.css';
// import {Routes, Route} from './BrowserRoute';
import { Routes , Route} from "react-router-dom";
import Header from './components/Header';
import Contact from './pages/Contact';
import Products from './pages/Products';
import GetAccess from './pages/GetAccess';
import Login from './pages/LogIn';
import Services from './pages/Services';
import Activities from './components/Activities';
import ActivitiesTwo from './components/ActivitiesTwo';
import Comments from './components/Comments';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
        <Header />
        <Activities Texts={"Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."} 
        Title="Your Hub for teamwork" Image={require('./images/niceOne.png')}/>
        <ActivitiesTwo TextsTwo={"Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."} 
        TitleTwo="Simple task management" ImageTwo={require('./images/niceTwo.png')}/>
        <Activities Texts={"Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."} 
        Title="Scheduling that actually works" Image={require('./images/niceThree.png')}/>
        <Comments />
        <Footer />
        <Routes>
          <Route path="/products" element={<Products/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/getAccess" element={<GetAccess/>}/>
        </Routes>
        
    </div>
  )
}

export default App;
