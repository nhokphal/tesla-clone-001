import React from 'react';
import '../../Components/Header.css';
import '../../Components/NavBar.css';

const Header = () => (
  <div className="header">
   <h1></h1>
  </div>
)
export default Header;

class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
        );
    }
}

export default Navbar;