import React, { Component } from 'react';
import './Ad.css';


class Ad extends Component {
  render() {
    let content = this.props.content;
    return (
      <div className="container-fluid btnMargin" style={{"textAlign": "center"}}>
        <button className="btn btn-primary btn-fill">{content.ad.appointment}</button>
        <button className="btn btn-warning btn-fill">{content.ad.vipappoinment}</button>
      </div>
    );
  }
}

export default Ad;
