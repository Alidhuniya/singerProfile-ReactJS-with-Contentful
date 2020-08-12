import React, { Fragment, Component} from 'react';
import "../sass/4-pages/about/_about.scss";
import "../sass/4-pages/home/_home.scss";
import "../sass/2-components/_ach.scss";
import "../sass/2-components/_live.scss";
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

            <div className = "ach">
            
            <div className = "ach__section"> 

            <div className = "ach__list">
            <h4 className = "ach__h4">30 +</h4>
            <h3 className = "ach__h3">Events</h3>
            </div>

            <div className = "ach__list">
            <h4 className = "ach__h4">5 +</h4>
            <h3 className = "ach__h3">Awards</h3>
            </div>

            <div className = "ach__list">
            <h4 className = "ach__h4">15 +</h4>
            <h3 className = "ach__h3">Clients</h3>
            </div>

            <div className = "ach__list">
            <h4 className = "ach__h4">6 +</h4>
            <h3 className = "ach__h3">Experience</h3>
            </div>
            
            </div>
            </div>

            {/*  start-Live video */}
            <div className="live" data-overlay="8">
              <div className="live__container">
              <div className = "live__playBtn">
                <div className="live__outerPlay">
                  <div className="live__play">
                    <a
                      href="https://www.facebook.com/ArijitSingh/videos/666177393834362/"
                      target="_blank"
                    >
                      <i className="fas fa-play fa-2x live__icon"></i>
                    </a>
                  </div>
                </div>
                </div>

                <h2 className="live__h2">Latest Live</h2>
                <h1 className="live__h1">"Thank you Bhairahawa"</h1>
                <div className = "pr">
                <p className="live__p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrudt ipsum dolor
                    sit.
                </p>
                </div>

                <div className = " live__containerBtn">
        
                <button className="live__button">
                  <a
                    className="live__btn"
                    href="https://www.facebook.com/ArijitSingh/videos/"
                    target="_blank"
                    >View More</a>
                </button>

                </div>

              </div>
            </div>
            {/*  End-Live video */}


            

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