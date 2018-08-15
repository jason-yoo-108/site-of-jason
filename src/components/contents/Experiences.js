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
          workplaces who broadened my perspective of life and programming.
        </p>
        <Carousel interval={10000}>
          <Carousel.Item>
            <Row style={{ margin: 0 }}>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <a href={linkHoot} target="_blank">
                  <img src={imageHoot} alt="" />
                </a>
              </Col>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <h3>Hootsuite DevOps Intern</h3>
                <h5>(May 2018 - Aug 2018)</h5>
                <div style={{ textAlign: 'left' }}>
                  <p>Here are some cool things that I've used:</p>
                  <ul>
                    <li>Languages: Go, Bash</li>
                    <li>
                      Technologies: AWS, Docker, HashiCorp Stack, Jenkins,
                      Kubernetes, Minikube, Serverless
                    </li>
                  </ul>
                  <p>Here is a brief highlight of my work:</p>
                  <ul>
                    <li>
                      Building a Kubernetes compatible development environment
                      using Bash and Minikube
                    </li>
                    <li>
                      Creating a RESTful microservice on AWS Lambda using Go,
                      Lambda, and DynamoDB
                    </li>
                    <li>
                      Developing a Go-based CLI tool for managing the
                      aforementioned service
                    </li>
                    <li>
                      Writing a Jenkins pipeline for building Docker images
                      using Groovy
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row style={{ margin: 0 }}>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <a href={linkSAP} target="_blank">
                  <img src={imageSAP} alt="" />
                </a>
              </Col>
              <Col xs={12} sm={6} style={{ padding: 24 }}>
                <h3>SAP Software Engineer Intern</h3>
                <h5>(Sep 2017 - Apr 2018)</h5>
                <div style={{ textAlign: 'left' }}>
                  <p>Here are some cool things that I've used:</p>
                  <ul>
                    <li>Languages: Ruby, Bash</li>
                    <li>
                      Technologies: Capistrano, Chef, Jenkins, RabbitMQ, Ruby on
                      Rails, Selenium
                    </li>
                  </ul>
                  <p>Here is a brief highlight of my work:</p>
                  <ul>
                    <li>
                      Expanding SAP Jam’s server diagnostics and relaying the
                      results to Zulip servers
                    </li>
                    <li>Implementing Blue Green Deployment for Jam</li>
                    <li>
                      Implementing re-queueing of flaky automated tests using
                      RabbitMQ and Rails
                    </li>
                    <li>Automating tests for realtime features</li>
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
