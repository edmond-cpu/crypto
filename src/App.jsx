import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';
import './index.css';
import Market from './pages/market';
import Contact from './pages/contact';
import CoinDetails from './pages/coindetails';

function App() {
  return(
    <Router>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/market' element= {<Market />} />
        <Route path='/contact' element= {<Contact />} />
         <Route path="/coin/:uuid" element={<CoinDetails />} />
      </Routes>
    </Router>
     

  )
}


export default App;