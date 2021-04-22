import React, { Component } from 'react'

export default class StatetoC extends Component {
        constructor() {
        super();
        this.state = {date: new Date()};
      }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.set(),
          1000
        );
      }

    componentWillUnmount() {
        clearInterval(this.timerID);
      }

    set() {
        this.setState({
          date: new Date()
        });
      }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
