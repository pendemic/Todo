import React, {Component} from 'react';//Added {Component}
import logo from './logo.svg';
import './App.css';

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

  constructor(){
    //We are going to create state data for our component. To do that we need to create a construtor method. This method will get called when an object is created using this class. Said another way, this methos will be called when the component is initialized.
    
    //To ensure that we have all the necessary features from React to create a stateful component, wwe need to call the super() method.
    //This super() calls the constructor for the component class in React
    super();
  }
  render = () =>
  //When using the fat arrow syntax the return keyword is not needed and curly braces around the body of the function is also not needed
    <div>

    </div>

};
