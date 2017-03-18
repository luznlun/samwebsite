'use strict';

import React from 'react';

export default class IndexPage extends React.Component {
  render() {
    console.log("***..", this.props)
    return (
      <div className="container">
        Content
      </div>
    );
  }
}
