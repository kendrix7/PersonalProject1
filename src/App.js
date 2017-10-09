import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar.js";
import Home from './components/home.js';
import CreatePlayer from './components/createPlayer.js';
import Hearts from './components/hearts.js';
import HandAndFoot from './components/handAndFoot.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      active: "Home",
      players: []
    }

    this.mainDisplayFn = this.mainDisplayFn.bind(this);
    this.handleDisplayChange = this.handleDisplayChange.bind(this);
  }

  mainDisplayFn() {
    if (this.state.active === "Home") {
      return <Home />;
    } else if (this.state.active === "Create Player") {
      return <CreatePlayer />;
    } else if (this.state.active === "Hearts") {
      return <Hearts />
    } else if (this.state.active === "Hand and Foot") {
      return <HandAndFoot />
    }
  }

  handleDisplayChange(val) {
    this.setState({
      active: val
    })
  }

  render() {
    return (
      <div id="master_container">
        <div id="master_comp_container">
          {this.mainDisplayFn()}
        </div>
        <div id="master_navbar_container">
          <Navbar
            handleDisplayChange={this.handleDisplayChange}
          />
        </div>
      </div>
    )
  }
}

export default App;