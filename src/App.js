
import './App.css';
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import SearchPage from './SearchPage' 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <div className="app">

      <Router>
        <Header/> 

        <Routes> 
          /* Home Page*/
          <Route path  = "/" element= {<Home/>} />
          /* Search Page */ 
          <Route path = "/search" element = {<SearchPage/>} />   
        </Routes>
        
        <Footer />
      </Router>

     
    </div>
  );
}

export default App;
