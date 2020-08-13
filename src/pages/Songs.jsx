import React, {Component, Fragment} from 'react';
import Sidebar from './../modules/Sidebar';
import Footer from './../modules/Footer';
import Youtube from './../modules/Youtube';
import Release from './../modules/Release';


class Songs extends Component {
    render () {
        return (
            <Fragment>
            
            <section className = "home" >
            <div className = "home__leftContainer">
            <Sidebar />
            </div>
            <div className = "home__rightContainer">
            <Release />
            <Youtube />
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