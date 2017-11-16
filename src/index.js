import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Anime from 'react-anime';
import usersReducer from './reducers/usersReducer'
import instrumentsReducer from './reducers/instrumentsReducer'
import ensemblesReducer from './reducers/ensemblesReducer'
import searchReducer from './reducers/searchReducer'
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({ usersReducer, instrumentsReducer,ensemblesReducer, searchReducer })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><Router><App className='app-container'/></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
