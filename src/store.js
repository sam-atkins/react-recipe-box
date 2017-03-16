import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import recipes from './data/recipes';
import ingredients from './data/ingredients';

// create an object for the default data
const defaultState = {
  recipes,
  ingredients
};

// connect store to Redux DevTools
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// create the store
const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// enable hot reloading of reducers
if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
