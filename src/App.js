import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const programmer = [" Jahin", " Lezy", " Kiran", " voran"];
  const friends = [{ name: " rana", age: 27 }, { name: " jahid", age: 23 }, { name: " karim", age: 29 }]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Learning React</p>
        <ProjectCounter></ProjectCounter>

        <Nayok Name=" Rahim"> </Nayok>
        <Nayok Name=" karim"></Nayok>
        <Nayok Name={programmer[1]} Age="23"></Nayok>
        <Nayok></Nayok>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {
          friends.map(frnd => <Nayok Name={frnd.name}></Nayok>)
        }

      </header>
    </div>
  );
}
function ProjectDone(props) {
  return (
    <h4>My completed project count:{props.totalProject} </h4>
  )

}

function ProjectCounter() {
  // useState(0);
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add Project</button>
      <h6>Total Number of Projects: {count} </h6>
      <ProjectDone totalProject={count}></ProjectDone>
    </div>
  )
}

function Nayok(props) {
  const nayokStyle = {
    border: "5px solid red",
    margin: "20px",
    padding: "20px",
    maxWidth: "300px",
    boxShadow: "5px 3px 5px yello"

  }
  return <div style={nayokStyle}>
    <h2>I am a Programmer{props.Name} and my age is {props.Age || 21}</h2>
    <h3>I have done some interesting projcts</h3>

  </div>

}


export default App;
