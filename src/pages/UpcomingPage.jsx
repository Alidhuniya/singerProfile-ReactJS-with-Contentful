import React, { Fragment, Component} from 'react';
import Sidebar from './../modules/Sidebar';
import Upcoming from './../modules/Upcoming';
import Footer from './../modules/Footer';
import "../sass/4-pages/home/_home.scss";

class UpcomingPage extends Component {
    render() {
        return (
            <Fragment>
            <section className = "home" >
            <div className = "home__leftContainer">
            <Sidebar />
            </div>
            <div className = "home__rightContainer">
            <Upcoming className = "home__upcoming" />
            <div className = "home__footer">
            <Footer />
            </div>
            </div>
            </section>
            </Fragment>
            
        );
    }
}

export default UpcomingPage;