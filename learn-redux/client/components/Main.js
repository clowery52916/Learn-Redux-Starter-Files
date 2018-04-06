import React, { Component } from 'react';
import { Link } from 'react-router'


export default class Main extends Component {



  render() {
    return (
      <div>
        <h1>
          <Link to='/'> Reduxtagram </Link>
          {React.cloneElement(this.props.children, this.props)}
          {/* {...this.props.children, this.props} */}
        </h1>
      </div>
    );
  }

}
