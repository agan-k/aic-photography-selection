import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './Header.css'
import logo from '../assets/aic-logo.gif'
// import { render } from "@testing-library/react";


class Header extends React.Component {
  constructor() {
    super() 
    this.state = {
      isShowing: false
    }
    this.showDropdown = this.showDropdown.bind(this)
    this.closeDropdown = this.closeDropdown.bind(this)
  }

  showDropdown() {
    
    this.setState({
      isShowing: true
    });
  };

  closeDropdown() {
    
    this.setState({
      isShowing: false
    });
  };
  
  render() {
      return (
         <header>
            <div className="logo-container">
               <img className="logo" src={logo}/>
               <h1>Photography Collection</h1>
            </div>
          <ul className="navigation">
            <li><Link to="/">Home</Link></li>
    
            <ul
              
              onMouseEnter={this.showDropdown}
              onMouseLeave={this.closeDropdown}
              className = {`${this.state.isShowing ?
                  "show" : ""} photographers-dropdown`
              }>
              <li onClick={this.showDropdown}id="dropdown-open">Photographers</li>
              <li onClick={this.closeDropdown}><Link to="/winogrand">Garry Winogrand</Link></li>
              <li onClick={this.closeDropdown}><Link to="/arbus">Diane Arbus</Link></li>
              <li onClick={this.closeDropdown}><Link to="/koudelka">Josef Koudelka</Link></li>
              <li onClick={this.closeDropdown}><Link to="/friedlander">Lee Friedlander</Link></li>
              <li onClick={this.closeDropdown}><Link to="/bresson">Henri Cartier-Bresson</Link></li>
              <li onClick={this.closeDropdown}><Link to="/frank">Robert Frank</Link></li>
              <li onClick={this.closeDropdown}><Link to="/evans">Walker Evans</Link></li>
              <li onClick={this.closeDropdown}><Link to="/leiter">Saul Leiter</Link></li>
              <li onClick={this.closeDropdown}><Link to="/davidson">Bruce Davidson</Link></li>
              <li onClick={this.closeDropdown}><Link to="/mann">Sally Mann</Link></li>
              <li onClick={this.closeDropdown}><Link to="/model">Lisette Model</Link></li>
              <li onClick={this.closeDropdown}><Link to="/bravo">Manuel Alvarez Bravo</Link></li>
              <li onClick={this.closeDropdown}><Link to="/levitt">Hellen Levitt</Link></li>
              <li onClick={this.closeDropdown}><Link to="/brandt">Bill Brandt</Link></li>
            </ul>
    
            <li><Link to="/Links">Links</Link></li>
          </ul>
        </header>
      );
   }

  


}
export default Header;
