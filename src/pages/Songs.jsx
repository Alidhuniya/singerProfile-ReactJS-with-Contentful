import React, {Component, Fragment} from 'react';
import Sidebar from './../modules/Sidebar';
import Footer from './../modules/Footer';
import Youtube from './../modules/Youtube';
import Release from './../modules/Release';
import "./../sass/4-pages/home/_home.scss";

class Songs extends Component {
    render () {
        return (
            <Fragment>
            
            <section className = "home" >
            <div className = "home__leftContainer">
            <Sidebar />
            </div>

            <div className = "home__rightContainer">
            <div className = "yt">
            <Release />
            <Youtube />
            </div>
            <div className = "home__footer">
            <Footer />
            </div>
            </div>
            </section>
            </Fragment>
        );
    }
}

export default Songs;