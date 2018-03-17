import React, { Component } from 'react';
import { Grid } from 'react-bootstrap/lib';
import { AboutMe } from './views/AboutMe';
import { Contact } from './views/Contact';
import { Experiences } from './contents/Experiences';
import { Projects } from './contents/Projects';
import { Quotes } from './contents/Quotes';

export class CustomBody extends Component {
  render() {
    const fadedWhite = 'rgba(200, 200, 200, 0.95)';
    const fadedDarkWhite = 'rgba(175, 175, 175, 0.95)';
    const jumboStyleOne = { marginBottom: 0, background: fadedWhite };
    const jumboStyleTwo = { marginBottom: 0, background: fadedDarkWhite };
    return (
      <Grid fluid style={{ padding: 0 }}>
        <AboutMe
          jumboStyle={Object.assign({ marginTop: '75vh' }, jumboStyleOne)}
        />
        <Experiences jumboStyle={jumboStyleTwo} />
        <Projects jumboStyle={jumboStyleOne} />
        <Quotes jumboStyle={jumboStyleTwo} />
        <Contact />
      </Grid>
    );
  }
}
