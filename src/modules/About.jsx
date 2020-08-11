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
        const {subHeading} = view;
        return (

            <Fragment>
            <h1>{subHeading}</h1>
            </Fragment>

        );
    }
}

export default About;