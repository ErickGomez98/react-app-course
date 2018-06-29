import React from 'react';
import Radium from 'radium';

import './Person.css';

const Person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };
  return (
      <div className='Person' style={style}>
        <h1 onClick={props.click}>Hey I'm a {props.name} and i'm {props.age} years old </h1>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
      </div>
  );
};

export default Radium(Person);