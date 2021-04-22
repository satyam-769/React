import React, { Component } from 'react';
import First from './First';
import Second from './Second'

export default class LiftingStateUp extends Component {
    state = {
        name: "satyam"
    };
    render() {
        return (
            <div>
              <First name={this.state.name}/>
              <Second name={this.state.name}/>  
            </div>
        )
    }
}
