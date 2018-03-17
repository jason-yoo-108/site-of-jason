import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap/lib';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Quotes extends Component {
  constructor(props) {
    super(props);
    this.quotes = {
      Buddha: 'You only lose what you cling to.',
      'Steve Hayes': "If you aren't willing to have it, you will.",
      'Robert Frost': 'The best way out is through.',
      'Shunryu Suzuki':
        "In the beginner's mind there are many possibilities. In the expert's mind there are few.",
      'John Yates':
        'In life, as in meditation, physical pain is unavoidable, but suffering of every kind is entirely optional.',
      'Mingyur Rinpoche':
        'If we could see the whole truth of any situation, our only response would be one of compassion.',
      Dogen:
        'A flower falls, even though we love it; and a weed grows, even though we do not love it.',
      'Sam Harris': 'It is always now.'
    };
    this.randomQuote = this.randomQuote.bind(this);
  }

  randomQuote() {
    const keys = Object.keys(this.quotes);
    const randInd = Math.floor(Math.random() * keys.length);
    const randKey = keys[randInd];
    return [randKey, this.quotes[randKey]];
  }

  render() {
    const divStyle = {
      background: 'white',
      borderRadius: 12,
      fontStyle: 'italic',
      padding: 12,
      textAlign: 'left'
    };
    const quoteInfo = this.randomQuote();
    return (
      <Jumbotron id="Quotes" style={this.props.jumboStyle}>
        <h1>Quote of the Day</h1>
        <p>
          This section features a random quote chosen from the list of my
          favourite quotes.
        </p>
        <div style={divStyle}>
          <p style={{ textIndent: 12 }}>{quoteInfo[1]}</p>
          <p style={{ margin: 0, textAlign: 'right' }}>- {quoteInfo[0]}</p>
        </div>
      </Jumbotron>
    );
  }
}
