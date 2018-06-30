import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '哈哈哈哈哈----66666666' };
  }
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>{this.state.name}</p>
        <p className="App-intro">
          This is the about page, go to the <Link to="/">home page</Link>?
        </p>
      </div>
    );
  }
}

export default About;

