import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
 /* render() {
    return (
      <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to='/' className='nav-logo'>
              EastAfrica
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
            <Link to='/' className='nav-links'>
              Home
          </Link>
            </li>
            <li className="nav-item">
            <Link to='/lands' className='nav-links'>
              Lands
          </Link>
            </li>
            <li className="nav-item">
            <Link to='/houses' className='nav-links'>
              Houses
          </Link>
            </li>
            <li className="nav-item">
            <Link to='/blog' className='nav-links'>
              Blog
          </Link>
            </li>
            <li className="nav-item">
            <Link to='/contacts' className='nav-links'>
              Contact Us
          </Link>
            </li>
          </ul>
        </div>
      </nav>
      </>
    )
  } 
  */
  render() {
    return (
      <nav className='navbar'>
       <div className='nav-center'>
           <div className='nav-header'>
           <Link to='/'>
               <h4>EastAfricanEstates.
                <span>com</span></h4>
            </Link>
            <button type='button' className='nav-btn' onClick={this.handleToggle}>
                <FaAlignRight className='nav-icon' />
            </button>
            </div>
            <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/lands'>Lands</Link>
                </li>
                <li>
                    <Link to='/houses'>Houses</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/contacts'>Contact Us</Link>
                </li>
            </ul>


        </div>
    </nav>
    )
  } 
}
