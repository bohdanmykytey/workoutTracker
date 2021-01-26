// stores global state values with reducers

import {createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer, composeWithDevTools())

// making giant reducer object
// BUT each reduce will contain its own "mini" state

const reducer = {
    activities: [{
        id: 1,
        name: 'gym',
        duration: '1 hour'
    }],

    people: [{
        id: 1, 
        name: 'John Doe'
    }]
};

export default store;