// import React modules
import React from 'react';
import { render } from 'react-dom';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// import css (managed by Webpack)
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Recipe from './components/Recipe';
import RecipeGrid from './components/RecipeGrid';


const router = (
  <Provider store={store}>  
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={RecipeGrid}></IndexRoute>
        <Route path="/view/:postId" component={Recipe}></Route>
      </Route>
    </Router>
  </Provider>
)


render (router, document.getElementById('root'));
