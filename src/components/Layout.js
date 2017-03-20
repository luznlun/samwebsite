'use strict';

import React from 'react';
import { Link } from 'react-router';

// const actions = require('../Action/actions');
import * as actions from '../Action/actions';
import {connect} from 'react-redux';

class Layout extends React.Component {
  handleSwitchLang(targetLang) {
    console.log("****switch to: ",targetLang, this.props.switchLanguage)
    this.props.switchLanguage(targetLang);
  }

  render() {
    let switchLanguage = this.props.switchLanguage;
    let content = this.props.content;
    return (
      <div className="app-container">
        <nav className="navbar navbar-ct-blue" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to={'/'}><div className="navbar-brand">Chris</div></Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to={'/iphone'}>{content.header.iphonerepair}</Link></li>
                <li><Link to={'/ipad'}>{content.header.ipadrepair}</Link></li>
                <li><Link to={'/pricing'}>{content.header.pricing}</Link></li>
                <li><Link to={'/aboutus'}>{content.header.aboutus}</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <button className="btn btn-default btn-round" onClick={() => this.handleSwitchLang(content.switch.target)}>{content.switch.lang}</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container col-md-12" style={{"textAlign": "center"}}>
          <button className="btn btn-primary btn-fill " style={{"margin": "5px"}}>{content.ad.appointment}</button>
          <button className="btn btn-warning btn-fill " style={{"margin": "5px"}}>{content.ad.vipappoinment}</button>
        </div>

        <div>{this.props.children}</div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2 className="primary-title" style={{"color":"#d32323"}}>{content.footer.findusonyelp}</h2>
              <img className="col-xs-12 col-md-12" src="" role="presentation"></img>
              <div className="container">
                <a href="" ><img src="" role="presentation"></img></a>
                <span>reviews: 0</span>
              </div>
            </div>
            <div className="col-md-4">
              <h2 style={{"color":"#619de5"}}>{content.footer.map}</h2>
              <iframe className="col-xs-12 col-md-12" height="300" frameBorder="0" style={{border:"0"}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJUSGv8WWHhYARMREszDov4lM&key=AIzaSyBIphdq8aiWRDeafRSJ12WV2wpi0H5-Zbw" allowFullScreen></iframe>
            </div>
            <div className="col-md-4">
              <h2 style={{"color":"rgb(101, 158, 203)"}}>{content.footer.freeparking}</h2>
              <img className="col-xs-12 col-sm-12 col-md-12" src="/img/download.jpeg" role="presentation"></img>
              <p><Link to={'/parking'}><button className="btn btn-primary" role="button">{content.footer.detail} »</button></Link></p>
            </div>
          </div>
          <hr/>
          <footer>
            <p>© Chris 2017</p>
          </footer>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { content: state.content }
}

export default connect(mapStateToProps, actions)(Layout);
