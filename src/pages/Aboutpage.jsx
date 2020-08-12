import React, { Fragment, Component} from 'react';
import "../sass/4-pages/about/_about.scss";
import "../sass/4-pages/home/_home.scss";
import Sidebar from './../modules/Sidebar';
import About from './../modules/About';
import Upcoming from './../modules/Upcoming';
import Footer from './../modules/Footer';

class Aboutpage extends Component {
    render() {
        return (
            <Fragment>
            <section className = "home" >
            <div className = "home__leftContainer">
            <Sidebar />
            </div>
            <div className = "home__rightContainer">
            <About />
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

export default Aboutpage;