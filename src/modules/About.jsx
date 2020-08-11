import React, { Fragment, Component} from 'react'
import { Client } from './../Client';
import "../sass/2-components/_about.scss";

class About extends Component {

    constructor (props) {
        super(props);
        this.state = {
            section: ""
        }
    }
    
    componentDidMount() {

        

        Client.getEntries({})
          .then((response) => {
              const data = response.items[4].fields;

            //   const entries = response.items;
            //   console.log(entries)

              this.setState ({
                  section: data
              })
              console.log(this.state.section);
          })
          .catch(console.error)

          
          
        }
    render () {

        const view = this.state.section;
        
        // console.log(view);
        const {subHeading, title, subtitle, hiremeBtn} = view;
        return (

            <Fragment>
            <section className = "about">
            <div className = "about__block">
            <p className = "about__subHeading">{subHeading}</p>
            <div className = "about__headingContainer">
            <h1 className = "about__heading">{title}</h1>
            <div className ="about__socialIcons">
            <i className="fab fa-facebook socialIcon"></i>
            <i className="fab fa-instagram-square socialIcon"></i>
            <i className="fab fa-twitter socialIcon"></i>
            </div>
            </div>
            <p className = "about__subtitle">{subtitle}</p>
            <p className = "about__p0">{view && view.description.content[0].content[0].value}</p>
            <p className = "about__p1">{view && view.description.content[1].content[0].value}</p>
            <p className = "about__p2">{view && view.description.content[2].content[0].value}</p>
            <button className = "about__btn">{hiremeBtn}</button>
            </div>
            </section>
            </Fragment>

        );
    }
}

export default About;