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
// import { Routes , Route} from "react-router-dom";
// import Header from './components/Header';
// import Contact from './pages/Contact';
// import Products from './pages/Products';
// import GetAccess from './pages/GetAccess';
// import Login from './pages/LogIn';
// import Services from './pages/Services';
// import Activities from './components/Activities';
// import ActivitiesTwo from './components/ActivitiesTwo';
// import Comments from './components/Comments';
// import Footer from './components/Footer';
// import {Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap"

function App() {
  return (
    <div className="app">
      <Container>
        <Row>
          <Col xs={12} md={8}>1st</Col>
          <Col xs={6} md={4}>2nd</Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>3rd</Col>
          <Col xs={6} md={4}>4th</Col>
          <Col xs={6} md={4}>5th</Col>
        </Row>
        <Row>
          <Col xs={6}>6th</Col>
          <Col xs={6}>7th</Col>
        </Row>
      </Container>
        {/* <Header />
        <Button variant="primary">Enable</Button>
        <Button variant="danger">Disable</Button>
        <Button variant="dark">NICE</Button>
        <Routes>
          <Route path="/products" element={<Products/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/getAccess" element={<GetAccess/>}/>
        </Routes> */}
        {/* <Activities Texts={"Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."} 
        Title="Your Hub for teamwork" Image={require('./images/niceOne.png')}/>
        <ActivitiesTwo TextsTwo={"Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."} 
        TitleTwo="Simple task management" ImageTwo={require('./images/niceTwo.png')}/>
        <Activities Texts={"Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."} 
        Title="Scheduling that actually works" Image={require('./images/niceThree.png')}/>
        <Comments />
        <Footer /> */}
    </div>
  )
}

export default App;
