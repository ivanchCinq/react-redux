import React, { Component } from 'react';

import Counter from './counter/counter.js';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './counter/counterReducer.js';

const reducers = combineReducers({
    counter: counterReducer
});

export default class App extends Component {
    render(){
        return (
            <div className='App'>
                <Provider store={createStore(reducers)}>
                    <Counter />
                </Provider>
            </div>
        );
    }
}