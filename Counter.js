import React from "react"; 

class Counter extends React.Component {
    
state = {
name: "Sara"
};
render() {
        return <h1>hello {this.state.name}</h1>;
}
}
export default Counter;
