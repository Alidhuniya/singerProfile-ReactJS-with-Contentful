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

        

        Client.getEntries({})
          .then((response) => {
              const data = response.items[0].fields;

            //   const entries = response.items;
            //   console.log(entries)

              this.setState ({
                  section: data
              })
              console.log(this.state.section);
          })
          .catch(console.error)

          
          
        }
       
    render() {

        const view = this.state.section;
        // console.log(view);
        const { heading} = view; // here I'm destructing objects so I only have to type heading without view.heading
        return (
            <Fragment>
          <section className = "sidebar">
          <div className = "sidebar__block">
          <div className = "sidebar__contents">
           <h1>{heading}</h1>
           
          <h1>{view && view.menuheadings.fields.about}</h1>
          
          </div>
          </div>
          </section>
            </Fragment>
        );
    }
}
