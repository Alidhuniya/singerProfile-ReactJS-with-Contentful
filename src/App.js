import React, { Fragment, Component } from "react";
import Home from './pages/Home';
import Aboutpage from './pages/Aboutpage';
import Error from './modules/Error';

import {

  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
	render() {
		return (
      <Fragment>
      <Router>
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route  path="/about" exact>
            <Aboutpage />
          </Route>
          <Route >
            <Error />
          </Route>
        </Switch>
        </Router>
			</Fragment>
		);
	}
}

export default App;
