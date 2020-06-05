import React, {Component} from 'react';//Added {Component}
import logo from './logo.svg';
import './App.css';
import {ToDoBanner} from './ToDoBanner'
import {ToDoRow} from './ToDoRow'

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
//export default App;
export default class App extends Component {
  //Above we have created a class called App that extends the functionality of the Component class.

  //The export keyword makes the class available for use outside of the JS file where it is created (like an access modifier in C#)

  constructor(props){
    //We are going to create state data for our component. To do that we need to create a construtor method. This method will get called when an object is created using this class. Said another way, this methos will be called when the component is initialized.
    
    //To ensure that we have all the necessary features from React to create a stateful component, wwe need to call the super() method.
    //This super() calls the constructor for the component class in React
    super(props);
    this.state = {
      userName: "Mikeo",
      todoItems: [
        {action: "Do Homework", done: false},
        {action: "Go to Dance Practice", done: false},
        {action: "Pay Bills", done: true},
        {action: "Play Super Smash Bros", done: false},
        {action: "Fix Headlights", done: false},
        {action: "Apply For Jobs", done: false}
      ]
    }

    //below is end of constructor
  }
      //Create a new method inside of the app component
      todoTableRows = (isDone) => this.state.todoItems.filter(todoItem => todoItem.done === isDone).map(itemx => <ToDoRow
        key = {itemx.action}
        item = {itemx}
        callback = {this.toggleToDo}
      />)

      // Invoked as a callback when the ToDoRow coponent has a change event to the "done" property .setState allos the data to be updated
      toggleToDo = (todo) => this.setState(
        {todoItems: this.state.todoItems.map(
          item => item.action === todo.action ? {...item, done: !item.done} : item
        )}
      );
  render = () =>
  //When using the fat arrow syntax the return keyword is not needed and curly braces around the body of the function is also not needed
    <div>
      {
        /*
        Features 1) and 2)
        */
      }
      <ToDoBanner
      displayName = {this.state.userName}
      tasks = {this.state.todoItems}
      />

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {this.todoTableRows(false)}
        </tbody>
      </table>
    </div>

};

