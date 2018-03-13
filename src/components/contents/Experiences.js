import React, { Component } from 'react';
import { Jumbotron, Row, Col, Carousel } from 'react-bootstrap/lib';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Carousel.css';
import imageSAP from '../../images/mind_fulfilled.png';
import imageHoot from '../../images/zenful_bot.png';

export class Experiences extends Component {
  constructor(props) {
    super(props);
  }
  //style={{marginLeft: 'auto', marginRight: 'auto'}}
  render() {
    const fitParent = { width: '100%', height: '100%', borderRadius: 12 };
    return (
      <Jumbotron style={this.props.jumboStyle}>
        <h1> Experiences</h1>
        <Carousel interval="10000">
          <Carousel.Item>
            <Row style={{ margin: 0 }}>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <img src={imageSAP} />
              </Col>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <h3>SAP DevOps Engineer Internship</h3>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row style={{ margin: 0 }}>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <img src={imageHoot} />
              </Col>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <h3>Hootsuite Production Ops & Delivery Internship</h3>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Jumbotron>
    );
  }
}
