import React, { Component } from 'react';

// var time = new Date().toLocaleTimeString();
var date = new Date().toLocaleDateString();

class Time extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }
    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.updateTime()
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID)
    }
    updateTime() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }
    render(){
        return (
            <div>
                <h3>{this.state.time}</h3>
                <p>{date}</p>
            </div>
        );
    }

}

export default Time;