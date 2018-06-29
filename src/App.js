import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Erick', age: 19}
    ],
    ohterState: 'Some other value',
    showPersons: false
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 19}
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    });
  };

  deletePersonHandler = (personIndex) => {
    /* Hacerlo de esta manera esta mal, porque se esta modificando el valor original de this.state.persons y
     no debe de ser asi, por lo tanto se tiene que crear una copia y ahora si manipularlo.
    const persons = this.state.persons;
    */

    // Entonces para hacer una copia, simplemente se usa el spread operator (...)
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                  click={this.deletePersonHandler.bind(this, index)}
                  name={person.name}
                  age={person.age}/>
            })}
          </div>
      );
    }

    return (
        <div className='App'>
          <h1>Hi I am a React App</h1>
          <button
              style={style}
              onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
