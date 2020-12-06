import React, { Component } from "react"
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom"
import './Header.css'
import logo from '../assets/aic-logo.gif'
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg'

class Header extends React.Component {
  constructor(props) {
    super() 
    this.state = {
      isShowing: false
    }
  }
  showDropdown = () => {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }
  closeDropdown = () => {
    this.setState({
      isShowing: false
    })
  }
  
  render() {
      return (
         <header>
            <Link to='/'>
               <div className="logo-container" onClick={this.closeDropdown}>
                  <img className="logo" src={logo}/>
                  <h1>Photography Collection</h1>
               </div>
            </Link>
          <div className="navigation">    
            <div
               onMouseEnter={this.showDropdown}
               onMouseLeave={this.closeDropdown}
               className = {`${this.state.isShowing ? "show" : ""} photographers-dropdown`}>
                  
               <li onClick={this.showDropdown} id="dropdown-open">Photographers</li>
                  
               <div className='photog-link' onClick={this.closeDropdown}>                     
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/winogrand">Garry Winogrand</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/arbus">Diane Arbus</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/koudelka">Josef Koudelka</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/friedlander">Lee Friedlander</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/bresson">Henri Cartier-Bresson</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/frank">Robert Frank</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/evans">Walker Evans</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/leiter">Saul Leiter</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/davidson">Bruce Davidson</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/mann">Sally Mann</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/model">Lisette Model</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/bravo">Manuel Alvarez Bravo</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/levitt">Hellen Levitt</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/brandt">Bill Brandt</NavLink></li>
               </div>
            </div>
    
            <li><Link to="/Links">Links</Link></li>
               <li><a href='https://www.instagram.com/aic.photography.collection'>
                  <Instagram className='instagram' /></a></li>
            
            </div>
            

            <div className="mobile-navigation">    
            <div
               onClick={this.showDropdown}
               className = {`${this.state.isShowing ? "show" : ""} photographers-dropdown`}>
                  
               <li onClick={this.showDropdown} id="dropdown-open">Photographers</li>
                  
               <div className='photog-link' onClick={this.closeDropdown}>
               <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/winogrand">Garry Winogrand</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/arbus">Diane Arbus</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/koudelka">Josef Koudelka</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/friedlander">Lee Friedlander</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/bresson">Henri Cartier-Bresson</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/frank">Robert Frank</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/evans">Walker Evans</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/leiter">Saul Leiter</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/davidson">Bruce Davidson</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/mann">Sally Mann</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/model">Lisette Model</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/bravo">Manuel Alvarez Bravo</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/levitt">Hellen Levitt</NavLink></li>
                  <li onClick={this.closeDropdown}><NavLink activeClassName='active-link' to="/brandt">Bill Brandt</NavLink></li>
               </div>
            </div>
    
            <li><Link to="/Links">Links</Link></li>
               <li><a href='https://www.instagram.com/aic.photography.collection'>
                  <Instagram className='instagram' /></a></li>
            
          </div>
        </header>
      )
   }
}
export default Header;
