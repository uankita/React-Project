import React, {Component} from 'react';
//import logo from './logo.svg';
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
          <div>
              <Main/>
          </div >

      );
  }
}

export default App;
