import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            display: false
        }

        this.menuFn = this.menuFn.bind(this);
    }

    menuFn() {
        this.setState({
            display: !this.state.display
        })
    }

    render() {
        console.log(this.state);
        var menu = 
            <div id="display_menu">
                <div onClick={()=> {this.props.handleDisplayChange("Home")}} >Home</div>
                <div onClick={()=> {this.props.handleDisplayChange("Create Player")}} >Create Player</div>
                <div onClick={()=> {this.props.handleDisplayChange("Hearts")}} >Hearts</div>
                <div onClick={()=> {this.props.handleDisplayChange("Hand and Foot")}} >Hand and Foot</div>
            </div>

        return (
            <div className="main_container_nav">
                <div className="title">Let's Play!</div>

                <nav className="nav_menu" onClick={this.menuFn}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </nav>
                {this.state.display ? menu : null}
            </div>
        )
    }
}

export default Navbar;