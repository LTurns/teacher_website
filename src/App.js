import React from "react";
import Contact from "./components/contact";
import Price from "./components/prices";
import About from "./components/about";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Services from "./components/services";
import Footer from "./components/footer";
import Privacy from './components/privacy';
import Book from './components/book'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
   <BrowserRouter>
     <Navigation/>
     <Switch>
         <Route path='/' exact component={ Header }></Route>
         <Route path='/about' component={ About }></Route>
         <Route path='/services' component={ Services }></Route>
         <Route path='/book' component={ Price }></Route>
         <Route path='/privacy' component={ Privacy }></Route>
         <Route path='/contact' component={ Contact }></Route>
         <Route path='/booking' component={ Book }></Route>
     </Switch>
    </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
