import ReactDOM from 'react-dom';
import React from 'react';

class Alert extends React.Component {
    showAlert() {
        alert("Hey, you clicked that button didn't yeah?");
    }

    render(){
       return <button onClick = {this.showAlert}>Click Me!</button>;
    }
    
    
}

ReactDOM.render( // render.(element, container[, callback]) render a react element into the DOM in the supplied container and return a reference to the component
    <Alert />,
    document.getElementById('app')
);