import React, { Component } from 'react';

import './App.css';

function App(props) {
 // setting the state hooks 
const [counter, setCounter] = useState(0);
const myFunction = (e) => {
	alert("The value of counter is " + counter)
	setCounter(counter + 1);
}

return (
	<div>
		
<p>Hello, {props.name}</p>

	<button onClick={myFunction}>Click me!</button>
	</div>
);
}




export default App;
