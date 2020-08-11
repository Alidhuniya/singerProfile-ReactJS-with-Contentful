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

            //   const entries = response.items;
            //   console.log(entries)

              this.setState ({
                  section: data
              })
            //   console.log(this.state.section);
          })
          .catch(console.error)

          
          
        }
       
    render() {

        
        const view = this.state.section;
        console.log(view);
        // const { heading, testin2, menuheadings} = view;
        console.log(view && view.menuheadings.fields.about);

        return (
            <Fragment>
          <section className = "sidebar">
          <div className = "sidebar__block">
          <div className = "sidebar__contents">
           <h1>{view.heading}</h1>
           <h3>{view.testin2}</h3>
          <h1>{view && view.menuheadings.fields.about}</h1>
          </div>
          </div>
          </section>
            </Fragment>
        );
    }
}
