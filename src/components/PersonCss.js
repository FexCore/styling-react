import React, { Component } from 'react';
import styles from './PersonCss.css';


class PersonCss extends Component {

  state = {
    color: ''
  }

  render(){

    const { persons } = this.props;
    let classes = styles.li;
   

    if(this.state.color !== ''){
      classes += ` ${styles[this.state.color]}`;
    }

    return(
      <ul className={styles.ul}>
        {persons.map(item => (
          <li key={item.name} className={classes}>
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

export default PersonCss;
