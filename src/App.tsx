import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { AppContainer } from './containers/AppContainer';
// import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { searchMiddleware } from './middlewares/searchMiddleware';
import { searchReducer } from './reducers/searchReducer';

export const App = () => {
  // const sagaMiddleware = createSagaMiddleware()

  const middlewares = applyMiddleware(searchMiddleware)
  const store = createStore(searchReducer, middlewares)

  return (
    <Provider store={store}>
      <AppContainer></AppContainer>
    </Provider>
  )
}
