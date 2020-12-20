import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="header-custom">
        <div className="header-custom-inner">
          <img src={require('../assets/logo.jpg').default} />
        </div>
      </div>
    );
  }
}

export default Header;