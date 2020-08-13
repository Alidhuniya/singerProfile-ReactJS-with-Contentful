import React, { Fragment, Component} from 'react'
import { Client } from './../Client';
import "../sass/2-components/_upcoming.scss";

class Upcoming extends Component {

    constructor (props) {
        super(props);
        this.state = {
            section: ""
        }
    }
    
    componentDidMount() {

        
        Client.getEntry("43zDXEQS1H8MkWpVnAtMlW")
        .then((response) => {
            const data = response.fields;
  
          //   const entries = response.fields;
          //   console.log(entries)
          // console.log(response);
  
            this.setState ({
                section: data
            })
            // console.log(this.state.section);
        })
        .catch(console.error)
        
        
      

          
          
        }
    render () {

        const view = this.state.section;
        
        // console.log(view);
        const {date, location, time, bookNowBtn} = view;
        return (

            <Fragment>
            <section className = "upcoming">
            <div className = "upcoming__container">
            <h1 className = "upcoming__h1">Upcoming Events</h1>
         { view && <img className = "upcoming__thumbnail" src = {view.thumbnail.fields.file.url} alt = "upcomingEvent" title = "upcomingEvent" /> } 
            <p className = "upcoming__p0  "><i className = "fa fa-dot-circle icon"></i>{date}</p>
            <p className = "upcoming__p1"><i className = "fa fa-dot-circle icon"></i>{location}</p>
            <p className = "upcoming__p2"><i className = "fa fa-dot-circle icon"></i>{time}</p>
            <button className = "upcoming__btn">{bookNowBtn}</button>
            </div>
            </section>
            </Fragment>

        );
    }
}

export default Upcoming;