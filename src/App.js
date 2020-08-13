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
            
          </Route>
        
          <Route  path="/about" exact>
          <Sidebar />
          <Aboutpage />
            
            
          </Route>
          <Route  path="/upcoming" exact>
          <Sidebar />
          <UpcomingPage />
          
        </Route>
        <Route  path="/songs" exact>
        <Sidebar />
          <Songs />
          
        </Route>
        <Route  path="/subscribe" exact>
        <Sidebar />
          <Subscribe />
          
        </Route>
          <Route >
          <Sidebar />
            <Error />
            
          </Route>
         
        </Switch>
        </Router>

        <Footer />
          
			</Fragment>
		);
	}
}

export default App;
