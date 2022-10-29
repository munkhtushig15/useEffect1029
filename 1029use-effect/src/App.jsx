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
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Header from './components/Header';
import Contact from './pages/Contact';
import Products from './pages/Products';
import GetAccess from './pages/GetAccess';
import Login from './pages/LogIn';
import Services from './pages/Services';

function App() {
  return (
    <div className="app">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/products" element={<Products/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/getAccess" element={<GetAccess/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
