import React, { Component } from 'react';



class PersonStyle extends Component {

  state = {
    color: ''
  }

  render(){

    const style = {

      ul: {
        listStyleType: 'none',
      },
      li: {
        backgroundColor: '#fff',
        font: 'arial',
        border: '1px solid blue',
        padding: '10px',
        cursor: 'pointer',
        color: '#000',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        width: 200
      }
    }

    const { persons } = this.props;
    const { ul, li } = style;

    if(this.state.color !== ''){
      li.color = this.state.color;
    }

    return(
      <ul style={ul}>
        {persons.map(item => (
          <li key={item.name} style={li}>
            <span>{item.name}</span>
            <span>{item.age}</span>
          </li>
        ))}
        <li>
          <button onClick={() => this.setState({ color: 'red'})}>Make it red</button>
        </li>
      </ul>
    );
  }
};

export default PersonStyle;
