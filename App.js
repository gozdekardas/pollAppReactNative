import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import questionsReducer from './reducers/questions';
import Navigator from './navigation/Navigator';

const rootReducer = combineReducers({
  questions: questionsReducer
});

const store = createStore(rootReducer);

export default function App() {

 
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

