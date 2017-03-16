import React from 'react';
import { Link } from 'react-router';


const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Recipe Box</Link>
        </h1>
        {this.props.children}
      </div>
      )
  }
});

export default Main;

// {React.cloneElement(this.props.children, this.props)}
