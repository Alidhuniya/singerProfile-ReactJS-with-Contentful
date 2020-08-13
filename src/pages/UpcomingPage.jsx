import React, { Fragment, Component} from 'react';
// import Sidebar from './../modules/Sidebar';
import Upcoming from './../modules/Upcoming';
// import Footer from './../modules/Footer';
import "../sass/4-pages/home/_home.scss";

class UpcomingPage extends Component {
    render() {
        return (
            <Fragment>
            <section className = "home" >
            
            <div className = "home__rightContainer">
            <Upcoming className = "home__upcoming" />
            
            </div>
            </section>
            </Fragment>
            
        );
    }
}

export default UpcomingPage;