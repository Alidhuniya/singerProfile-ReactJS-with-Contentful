import React, { Fragment, Component} from 'react';
import { Client } from './../Client';


export default class Sidebar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            section: ""
        }
    }
    
    componentDidMount() {

        

        Client.getEntries({
            include: 3
          })
          .then((response) => {
              const data = response.items[0].fields;
            //   console.log(data)
              this.setState ({
                  section: data
              })
              console.log(this.state.section);
          })
          .catch(console.error)

          
          
        }
       
    render() {

        
        const view = this.state.section;
        const { heading, testin2, menuheadings} = view;

        return (
            <Fragment>
          <section className = "sidebar">
          <div className = "sidebar__block">
          <div className = "sidebar__contents">
           <h1>{heading}</h1>
           <h3>{testin2}</h3>
         <h2>{menuheadings.fields.about}</h2>
          </div>
          </div>
          </section>
            </Fragment>
        );
    }
}
