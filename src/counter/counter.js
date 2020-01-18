import React, { Component } from "react";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add, dec, stepChanged } from './counterActions.js';

class Counter extends Component {
    render(){
        return (
            <div id='counter'>
                <h2>{this.props.counter.points}</h2>
                <input type='number' value={this.props.counter.step} onChange={this.props.stepChanged}/>
                <br />
                <span className='row'>
                    <button name='+' onClick={this.props.add}>+</button>
                    <button name='-' onClick={this.props.dec}>-</button>
                </span>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { counter: state.counter }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ add, dec, stepChanged }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);