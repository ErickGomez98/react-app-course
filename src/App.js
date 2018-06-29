import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Erick', age: 19}
    ],
    ohterState: 'Some other value'
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Erick Gómez', age: 19}
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 19}
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inheirt',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className='App'>
        <h1>Hi I'm a React App</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maximilian')}>Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'MaX!!!!')}
          changed={this.nameChangedHandler}>My hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
