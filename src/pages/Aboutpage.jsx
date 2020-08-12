import React, { Fragment, Component} from 'react';
import "../sass/4-pages/about/_about.scss";
import "../sass/4-pages/home/_home.scss";
import Sidebar from './../modules/Sidebar';
import About from './../modules/About';
import Upcoming from './../modules/Upcoming';
import Footer from './../modules/Footer';
import sumit from "../img/sumit.svg";

class Aboutpage extends Component {
    render() {
        return (
            <Fragment>
            <section className = "home" >
            <div className = "home__leftContainer">
            <Sidebar />
            </div>
            <div className = "home__rightContainer">
   
            <h1 className = "aboutpage__about">About Me</h1>
          
            <div className = "about__section">

            <div className = "aboutpage__aboutComponents">
            <About />
            </div>
            <div>
            <h1 className = "about__h1aboveimg">Performing</h1>
            <img className = "aboutpage__img" src={sumit} alt="me-sumit poudel" title = "Sumit Poudel" />
            </div>
            </div>

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