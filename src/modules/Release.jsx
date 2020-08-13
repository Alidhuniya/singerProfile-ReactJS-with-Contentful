import React, {Component, Fragment} from 'react';
import { Client } from './../Client';
import "./../sass/2-components/_release.scss";
import {
    Link
  } from "react-router-dom";

class Release extends Component {

    constructor (props) {
        super(props);
        this.state = {
            section: ""
        }
    }
    
    componentDidMount() {

        

      Client.getEntry("6IviQW63WphgO3KnPDrgRT")
      .then((response) => {
          const data = response.fields;

        console.log(data);

          this.setState ({
              section: data
          })
        
      })
      .catch(console.error)

          
          
        }

    render () {
        const view = this.state.section;
        const { heading, description, date, notifyme } = view;
        return (

            <Fragment>
            <section className = "release">
            <div className = "release__block">
            <h1 className = "release__h1">{heading}</h1>
            {view && <img className = "release__img" src = {view.bannerimg[0].fields.file.url} alt = {heading} title = {heading} /> }
            <p className = "release__desc">{description}</p>
            <p className = "release__date">{date}</p>
            <Link className = "sidebar__menusLinks notifyme" to="/subscribe">{notifyme}</Link>
            </div>
            </section>
            </Fragment>

        );
    }
}

export default Release;