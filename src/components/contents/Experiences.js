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
    const fitParent = { width: '100%', height: '100%', padding: 24 };
    return (
      <Jumbotron style={this.props.jumboStyle}>
        <Carousel interval="10000000">
          <Carousel.Item>
            <Row>
              <Col xs={12} sm={6}>
                <img src={imageSAP} style={fitParent} />
                <Carousel.Caption style={{ color: 'white' }}>
                  <h3>SAP DevOps Engineer Internship</h3>
                </Carousel.Caption>
              </Col>
              <Col xs={12} sm={6}>
                <h3>The Experience was quite good.</h3>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col xs={12} sm={6}>
                <img src={imageHoot} style={fitParent} />
                <Carousel.Caption style={{ color: 'black' }}>
                  <h3>Hootsuite DevOps Engineer Internship</h3>
                </Carousel.Caption>
              </Col>
              <Col xs={12} sm={6}>
                <h3>The Experience to come!</h3>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Jumbotron>
    );
  }
}
