import React, { Fragment, Component } from "react";
// import Home from './pages/Home';
// import About from "./modules/About";
import Upcoming from './modules/Upcoming';

class App extends Component {
	render() {
		return (
			<Fragment>
				{/* <Home /> */}
          {/*<About /> */}
          <Upcoming />
			</Fragment>
		);
	}
}

export default App;
