import React, { Component } from 'react';
import $ from 'jquery';
import * as actions from '../../Action/actions';
import {connect} from 'react-redux';

class Pricing extends Component {

  componentDidMount(){
    $('[data-toggle="gsdk-collapse"]').hover(
    function(){
            console.log('on hover');
            var thisdiv = $(this).attr("data-target");

            if(!$(this).hasClass('state-open')){
                $(this).addClass('state-hover');
                $(thisdiv).css({
                    'height':'30px'
                });
            }

        },
        function(){
            var thisdiv = $(this).attr("data-target");
            $(this).removeClass('state-hover');

            if(!$(this).hasClass('state-open')){
                $(thisdiv).css({
                    'height':'0px'
                });
            }
        }
    );

    $('[data-toggle="gsdk-collapse"]').click(
    function(event){
            event.preventDefault();

            var thisdiv = $(this).attr("data-target");
            var height = $(thisdiv).children('.panel-body').height();

            if($(this).hasClass('state-open')){
                $(thisdiv).css({
                    'height':'0px',
                });
                $(this).removeClass('state-open');
            } else {
                $(thisdiv).css({
                    'height':height,
                });
                $(this).addClass('state-open');
            }
        }
    );
  }

  render() {

    let content = this.props.content;
    return (
      <div className="container ">
        <div className="panel-group" id="accordion">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-target="#collapseOne" data-toggle="gsdk-collapse" className="">
                  {content.header.iphonerepair}
                </a>
              </h4>
            </div>
            <div id="collapseOne" className="panel-collapse collapse gsdk-collapse" style={{"height":"0px"}}>
              <div className="panel-body">
                <div className="col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                  <div className="table-responsive">
                  <table className="table table-shopping">
                      <thead>
                          <tr>
                              <th className="text-center"></th>
                              <th className="th-description">{content.pricing.description}</th>
                              <th className="text-right">{content.pricing.price}</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>
                                  <div className="img-container">
                                      <img style={{"width":"100px"}} src="/img/ip7cr.jpg" alt="..."/>
                                  </div>
                              </td>
                              <td className="td-name">
                                  <p>{content.product.ip7cr}</p>
                              </td>
                              <td className="td-number">
                                  <small>$</small>100
                              </td>
                          </tr>
                          <tr>
                               <td>
                                  <div className="img-container">
                                      <img style={{"width":"100px"}} src="/img/ip7chport.jpg" alt="..."/>
                                  </div>
                              </td>
                              <td>{content.product.ip7chport}</td>
                              <td className="td-number">

                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div className="img-container">
                                      <img style={{"width":"100px"}} src="/img/ip7batt.jpg" alt="..."/>
                                  </div>
                              </td>
                              <td>{content.product.ip7batt}</td>
                              <td className="td-number">
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div className="img-container">
                                      <img style={{"width":"100px"}} src="/img/ip7pb.jpg" alt="..."/>
                                  </div>
                              </td>
                              <td>{content.product.ip7pb}</td>
                              <td className="td-number">
                              </td>
                          </tr>
                          <tr>
                               <td>
                                  <div className="img-container">
                                      <img style={{"width":"100px"}} src="/img/ip7camf.jpg" alt="..."/>
                                  </div>
                              </td>
                              <td>Front Camera</td>
                              <td className="td-number">
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div className="img-container">
                                      <img style={{"width":"100px"}} src="/img/ip7pb.jpg" alt="..."/>
                                  </div>
                              </td>
                              <td>
                                Power/Lock button
                              </td>
                              <td className="td-number">
                              </td>
                          </tr>
                          <tr>
                               <td>
                                  <div className="img-container">
                                      <img style={{"width":"100px"}} src="/img/ip7camf.jpg" alt="..."/>
                                  </div>
                              </td>
                              <td>Front Camera</td>
                              <td className="td-number">
                              </td>
                          </tr>
                      </tbody>
                  </table>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-target="#collapseTwo" href="#collapseTwo" data-toggle="gsdk-collapse" className="">
                  Ipad
                </a>
              </h4>
            </div>
            <div id="collapseTwo" className="panel-collapse collapse gsdk-collapse" style={{"height":"0px"}}>
              <div className="panel-body">
                <div className="col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                  <div className="table-responsive">
                  <table className="table table-shopping">
                      <thead>
                          <tr>
                              <th className="text-center"></th>
                              <th className="th-description">{content.pricing.description}</th>
                              <th className="text-right">{content.pricing.price}</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>
                                  <div className="img-container">
                                      <img style={{"width":"100px"}} src="../ip7cr.jpg" alt="..."/>
                                  </div>
                              </td>
                              <td className="td-name">
                                  <p>{content.product.ip7cr}</p>
                              </td>
                              <td className="td-number">
                                  <small>$</small>100
                              </td>
                          </tr>
                          <tr>
                               <td>
                                  <div className="img-container">
                                      <img style={{"width":"100px"}} src="/ip7chport.jpg" alt="..."/>
                                  </div>
                              </td>
                              <td>{content.product.ip7chport}</td>
                              <td className="td-number">

                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div className="img-container">
                                      <img style={{"width":"100px"}} src="/ip7batt.jpg" alt="..."/>
                                  </div>
                              </td>
                              <td>{content.product.ip7batt}</td>
                              <td className="td-number">
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div className="img-container">
                                      <img style={{"width":"100px"}} src="/ip7pb.jpg" alt="..."/>
                                  </div>
                              </td>
                              <td>{content.product.ip7pb}</td>
                              <td className="td-number">
                              </td>
                          </tr>
                          <tr>
                               <td>
                                  <div className="img-container">
                                      <img style={{"width":"100px"}} src="/ip7camf.jpg" alt="..."/>
                                  </div>
                              </td>
                              <td>Front Camera</td>
                              <td className="td-number">
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <div className="img-container">
                                      <img style={{"width":"100px"}} src="/ip7pb.jpg" alt="..."/>
                                  </div>
                              </td>
                              <td>
                                Power/Lock button
                              </td>
                              <td className="td-number">
                              </td>
                          </tr>
                          <tr>
                               <td>
                                  <div className="img-container">
                                      <img style={{"width":"100px"}} src="/ip7camf.jpg" alt="..."/>
                                  </div>
                              </td>
                              <td>Front Camera</td>
                              <td className="td-number">
                              </td>
                          </tr>
                      </tbody>
                  </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-target="#collapseThree" href="#collapseTwo" data-toggle="gsdk-collapse" className="">
                  Some phone
                </a>
              </h4>
            </div>
            <div id="collapseThree" className="panel-collapse collapse gsdk-collapse" style={{"height":"0px"}}>
              <div className="panel-body">
                Something
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { content: state.content }
}

export default connect(mapStateToProps, actions)(Pricing);
