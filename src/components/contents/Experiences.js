import React, { Component } from 'react';
import { Jumbotron, Row, Col, Carousel } from 'react-bootstrap/lib';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Carousel.css';
import imageSAP from '../../images/sap.jpg';
import imageHoot from '../../images/hootsuite.jpg';

export class Experiences extends Component {
  render() {
    const linkSAP = 'https://www.sap.com/index.html';
    const linkHoot = 'https://hootsuite.com/';
    return (
      <Jumbotron id="Experiences" style={this.props.jumboStyle}>
        <h1> Experiences</h1>
        <p>
          I was lucky to have known kind and helpful people at UBC and at
          workplace who broadened my perspective of life and programming. I'm
          especially thankful to George Secillano, my mentor at SAP Labs Canada.
        </p>
        <Carousel interval={10000}>
          <Carousel.Item>
            <Row style={{ margin: 0 }}>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <a href={linkSAP} target="_blank">
                  <img src={imageSAP} alt="" />
                </a>
              </Col>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <h3>SAP DevOps Engineer Co-op</h3>
                <h5>(Sep 2017 - Apr 2018)</h5>
                <div style={{ textAlign: 'left' }}>
                  <p>Here are some cool things that I've used:</p>
                  <ul>
                    <li>Languages: Ruby, Shell, Go</li>
                    <li>
                      Technologies: Capistrano, Chef, Git, Jenkins, Passenger,
                      Ruby on Rails, Watir
                    </li>
                  </ul>
                  <p>Here is a brief highlight of my work:</p>
                  <ul>
                    <li>Zero downtime restart during SAP Jam's deployment</li>
                    <li>
                      Server diagnostics such as checks for latency and dangling
                      file pointers
                    </li>
                    <li>
                      Deployment utilities such as rolling server warmup and
                      selective deployment
                    </li>
                    <li>Cloud provisioning and package upgrades</li>
                    <li>Test automation for realtime features</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row style={{ margin: 0 }}>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <a href={linkHoot} target="_blank">
                  <img src={imageHoot} alt="" />
                </a>
              </Col>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <h3>Hootsuite Production Ops & Delivery Co-op</h3>
                <h5>(May 2018 - Aug 2018)</h5>
                <div style={{ textAlign: 'left' }}>
                  <p>Here are some cool things that I've used:</p>
                  <ul>
                    <li>Languages: TBD</li>
                    <li>Technologies: TBD</li>
                  </ul>
                  <p>Here is a brief highlight of my work:</p>
                  <ul>
                    <li>Coming soon :)</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Jumbotron>
    );
  }
}
