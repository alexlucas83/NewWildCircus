import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Pages/Home/home';
import Calendar from './Pages/Calendar/calendar';
import Pictures from './Pages/Pictures/pictures';





function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/calendar" component={Calendar} />
               <Route path="/pictures" component={Pictures} /> 
               {/* <Route path="/contact" component={} />  */}
            </Switch>
      <Footer />
    </div>
      </BrowserRouter>
  );
}

export default App;
