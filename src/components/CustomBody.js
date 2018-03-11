import React, { Component } from 'react';
import { Grid } from 'react-bootstrap/lib';
import { AboutMe } from '../views/AboutMe';
import { Contact } from '../views/Contact';
import { Experiences } from './contents/Experiences';
import { Projects } from './contents/Projects';
import { Quotes } from './contents/Quotes';

export class CustomBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const fadedWhite = 'rgba(200, 200, 200, 0.7)';
    return (
      <Grid fluid>
        <AboutMe style={{ marginTop: '80vh', background: fadedWhite }} />
        <Experiences style={{ background: fadedWhite }} />
        <Projects style={{ background: fadedWhite }} />
        <Quotes style={{ background: fadedWhite }} />
        <Contact style={{ background: fadedWhite }} />
      </Grid>
    );
  }
}
