import React, { Component } from 'react';
import { Jumbotron, Row, Col, Carousel } from 'react-bootstrap/lib';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Carousel.css';
import imageMindFulfilled from '../../images/mind_fulfilled.png';
import imageZenfulBot from '../../images/zenful_bot.png';

export class Projects extends Component {
  constructor(props) {
    super(props);
  }
  //style={{marginLeft: 'auto', marginRight: 'auto'}}
  render() {
    const linkZenfulBot = 'https://www.messenger.com/t/zenfulbot';
    const linkMindFulfilled = 'https://github.com/truebluejason/mind_fulfilled';
    return (
      <Jumbotron style={this.props.jumboStyle}>
        <h1> Projects</h1>
        <Carousel interval={10000}>
          <Carousel.Item>
            <Row style={{ margin: 0 }}>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <a href={linkZenfulBot} target="_blank">
                  <img src={imageZenfulBot} />
                </a>
              </Col>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <h3>Zenful Bot: A Facebook Messenger Bot</h3>
                <div style={{ textAlign: 'left' }}>
                  <p>
                    Zenful Bot is a Facebook bot designed to help you have a
                    positive outlook on life.
                  </p>
                  <p>Here are some of the project's features:</p>
                  <ul>
                    <li>
                      Cloud-based thankfulness journal for changing one's
                      thinking pattern
                    </li>
                    <li>
                      Engaging content delivery with messages, buttons, and
                      images
                    </li>
                    <li>
                      Links to studies that show benefits of cultivating
                      gratefulness
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row style={{ margin: 0 }}>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <a href={linkMindFulfilled} target="_blank">
                  <img src={imageMindFulfilled} />
                </a>
              </Col>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <h3>Mind Fulfilled: A CLI Meditation App</h3>
                <div style={{ textAlign: 'left' }}>
                  <p>
                    Mind Fulfilled is an interactive meditation app designed to
                    help you be aware of your personal distraction triggers over
                    time.
                  </p>
                  <p>Here are some of the project's features:</p>
                  <ul>
                    <li>
                      Minimalist interface for recording your distractions
                      realtime
                    </li>
                    <li>
                      Customizable message to be displayed during meditation
                      session
                    </li>
                    <li>Statistics on your past data</li>
                    <li>Motivational daily streak system</li>
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
