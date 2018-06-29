import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Max', age: 28},
      {id: 2, name: 'Erick', age: 19}
    ],
    ohterState: 'Some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {

    // Es como la función de .map(), recibe una función para hacer una comparación, y regresa true o false si lo encontró
    // o no en base a la comparación que le asignamos.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Hay que crear una copia del objeto de la persona que se encontro mediante el index para no modificar el original
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    // Después creamos una copia de tod0 el array de personas, y en base al index, solo modificamos ese objeto (persona)
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inheirt',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                  click={this.deletePersonHandler.bind(this, index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}/>
            })}
          </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className='App'>
          <h1>Hi I am a React App</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button
              style={style}
              onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {persons}
        </div>
    );
  }
}

export default Radium(App);
