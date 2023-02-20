import logo from './logo.svg';
import './App.css';
import {Greeting} from './Greeting'
import { PeopleList } from './PeopleList';

const people = [
{name: 'John',
age: 40,
hairColor: 'brown'},
{
  name: 'Helga',
  age: 25,
  hairColor: 'red'
},
{
  name: 'Dwayne',
  age: 55,
  hairColor: 'blonde'
},
]

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <Greeting name="Abhi" numberOfMessages={202}/>
      {/* <Greeting  numberOfMessages={202}/> */}
        {/* {greetingElement} */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thi is so cool!!. Yes it is!
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

export default App;
