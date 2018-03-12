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
    const fadedWhite = 'rgba(200, 200, 200, 0.9)';
    const jumboStyle = { marginBottom: 12, background: fadedWhite };
    return (
      <Grid fluid style={{ padding: 0 }}>
        <AboutMe
          jumboStyle={Object.assign({ marginTop: '75vh' }, jumboStyle)}
        />
        <Experiences jumboStyle={jumboStyle} />
        <Projects jumboStyle={jumboStyle} />
        <Quotes jumboStyle={jumboStyle} />
        <Contact jumboStyle={jumboStyle} />
      </Grid>
    );
  }
}
