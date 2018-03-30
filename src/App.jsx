import React, { Component } from 'react';
import './App.css';
import { Clock } from "./Clock";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            deadline: 'December 25, 2018',
            newDeadline: ''
        }
    }

    changeDate(e) {
        console.log('state: ', this.state);
        this.setState({deadline: this.state.newDeadline});

    }

    render() {
        return(
                <div className='App'>
                    <h1>Count Down App</h1>
                    <div>Count down to Christmas, {this.state.deadline}</div>

                    < Clock
                        deadline={this.state.deadline}
                    />

                    <div>
                        <input
                            type="text"
                            placeholder="new date"
                            onChange = { event => this.setState({newDeadline: event.target.value})}
                        />
                        <button onClick={()=>this.changeDate()}>Set</button>
                    </div>
                </div>
            );

    }
}

export default App;