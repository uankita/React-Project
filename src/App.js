//import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
//import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MenuComponent';
//import Menu from './components/MainComponent';
import './App.css';
//import  { DISHES } from './shared/dishes';

class App extends Component {

 /* constructor(props) {
      super(props);
      this.state = {
          dishes: DISHES
      };
  }*/

  render() {
      return (
        <BrowserRouter>
          <div className = "App">
              <Main/>
          </div >
          </BrowserRouter>

      );
  }
}

export default App;
