import React, { Component } from 'react';
import PersonStyle from './components/PersonStyle';
import PersonCss from './components/PersonCss';
import PersonRadium from './components/PersonRadium';
import { StyleRoot } from 'radium';

class App extends Component {

  state = {
     persons:[
        {
          name: 'John Doe',
          age: 40
        },
        {
          name: 'Jane Doe',
          age: 38
        },
        {
          name: 'Max Doe',
          age: 14
        },
        {
          name: 'Tina Doe',
          age: 8
        }
     ] 
  }
  render() {
    return(
      <StyleRoot>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <PersonStyle persons={this.state.persons} />
          <PersonCss persons={this.state.persons} />
          <PersonRadium persons={this.state.persons} />
        </div>
      </StyleRoot>
    );
  }
}

export default App;
