import React, { Fragment, Component } from "react";
import Home from './pages/Home';
import Aboutpage from './pages/Aboutpage';
import UpcomingPage from './pages/UpcomingPage';
import Songs from './pages/Songs';
import Subscribe from './pages/Subscribe';
import Error from './modules/Error';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './modules/Footer';
import Sidebar from './modules/Sidebar';

class App extends Component {
	render() {
		return (
      <Fragment>
      <Router>
      <Switch>
          <Route path="/" exact>
          <Sidebar />
            <Home />
            <Footer />
          </Route>
        
          <Route  path="/about" exact>
          <Sidebar />
          <Aboutpage />
            <Footer />
            
          </Route>
          <Route  path="/upcoming" exact>
          <Sidebar />
          <UpcomingPage />
          <Footer />
        </Route>
        <Route  path="/songs" exact>
        <Sidebar />
          <Songs />
          <Footer />
        </Route>
        <Route  path="/subscribe" exact>
        <Sidebar />
          <Subscribe />
          <Footer />
        </Route>
          <Route >
          <Sidebar />
            <Error />
            <Footer />
          </Route>
         
        </Switch>
        </Router>
          
			</Fragment>
		);
	}
}

export default App;
