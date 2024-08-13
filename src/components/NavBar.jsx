import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


class NavBar extends Component {

  state = { clicked: false };
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
  return (
    <div className="navbar">
      <nav>
        <Link id='logolrnr' className={ this.state.clicked ? "nav-menu" : "nav-menu active" } style={{textDecoration: 'none', color: '#fff'}} to="/">lrnr</Link>

          <ul className={ this.state.clicked ? "nav-menu" : "nav-menu active" }>
              <li><Link style={{textDecoration: 'none', color: '#fff'}} to="/Account">Account</Link></li>    
              <li><Link style={{textDecoration: 'none', color: '#fff'}} to="/QuizPage">Quiz Generation</Link></li>
          </ul>
      <div className="mobile-navbar" onClick={this.handleClick}>
      <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
    </div>
    </nav>
    </div>

  );
}
}

export default NavBar;
