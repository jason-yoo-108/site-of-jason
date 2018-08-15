import React, { Component } from 'react';
import { Jumbotron, Row, Col, Carousel } from 'react-bootstrap/lib';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Carousel.css';
import imageMindFulfilled from '../../images/mind_fulfilled.png';
import imageZenfulBot from '../../images/zenful_bot.png';
import imageP2EWebsite from '../../images/p2e_website.png';
import imageP2EBot from '../../images/p2e_bot.png';

export class Projects extends Component {
  render() {
    const linkP2EBot = 'https://github.com/truebluejason/p2e-bot';
    const linkP2EWebsite = 'https://github.com/truebluejason/p2e-website';
    const linkZenfulBot = 'https://www.messenger.com/t/zenfulbot';
    const linkMindFulfilled = 'https://github.com/truebluejason/mind_fulfilled';
    return (
      <Jumbotron id="Projects" style={this.props.jumboStyle}>
        <h1>Projects</h1>
        <p>
          One rainy day in 2017, an thought struck me - "Why don't I combine
          ideas of my interest with programming to make cool things?" The
          projects below are the results of my effort at realizing that thought.
        </p>
        <Carousel interval={10000}>
          <Carousel.Item>
            <Row style={{ margin: 0 }}>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <a href={linkP2EBot} target="_blank">
                  <img src={imageP2EBot} alt="" />
                </a>
              </Col>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <h3>P2E Bot: A Facebook Bot</h3>
                <div style={{ textAlign: 'left' }}>
                  <p>
                    P2E Bot is a Facebook bot that can schedule meditation
                    reminders and hold interactive conversation sequences.
                  </p>
                  <p>Here are some of the project's features:</p>
                  <ul>
                    <li>
                      Schedule daily meditation reminders that come with
                      randomly selected Zen quotes.
                    </li>
                    <li>
                      Conversation sequences that prompts the user to
                      investigate an aspect of subjective experience
                    </li>
                    <li>
                      View consistency of practice, past action plans, and more
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row style={{ margin: 0 }}>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <a href={linkP2EWebsite} target="_blank">
                  <img src={imageP2EWebsite} alt="" />
                </a>
              </Col>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <h3>P2E Website: A Site on Meditation</h3>
                <div style={{ textAlign: 'left' }}>
                  <p>
                    Path to Enlightenment website is a site for learning about
                    meditation and keeping track of one's progress.
                  </p>
                  <p>Here are some of the project's features:</p>
                  <ul>
                    <li>
                      Step by step meditation instructions based on a levelling
                      system
                    </li>
                    <li>
                      Diagnotistc survey for making sure your practice stays on
                      point
                    </li>
                    <li>
                      Solutions for problems commonly encountered during
                      meditation
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row style={{ margin: 0 }}>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <a href={linkZenfulBot} target="_blank">
                  <img src={imageZenfulBot} alt="" />
                </a>
              </Col>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <h3>Zenful Bot: A Facebook Bot</h3>
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
                  <img src={imageMindFulfilled} alt="" />
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
