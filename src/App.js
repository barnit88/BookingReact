import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';

// import NavBar from './container/NavBar'
// import ImageCarousel from './container/Carousel';
// import Footer from './container/Footer';


function App() {
  return (
    <div>
        <Router>
              <BaseRouter />
        </Router>
      </div>     
  );
}

export default App;
