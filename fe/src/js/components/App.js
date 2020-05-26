import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            value: ""
        };
    }
    
    render () {
        return (
            <div>
                This is a template for a MERN stack application
            </div>
        )
    }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;