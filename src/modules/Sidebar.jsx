import React, { Fragment, Component} from 'react';
import { Client } from './../Client';
import "../sass/2-components/_sidebar.scss";

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
              const data = response.items[1].fields;

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
         {view && <img className = "sidebar__img" src = {view.profileimg.fields.file.url} alt = {heading} title = {heading} /> }
           <h1>{heading}</h1>
           <div className = "sidebar__menus">
         <a className = " fa fa-home"  href = "#">{view && view.menuheadings.fields.home}</a>
          <a href = "#">{view && view.menuheadings.fields.about}</a>
          <a href = "#">{view && view.menuheadings.fields.upcoming}</a>
          <a href = "#">{view && view.menuheadings.fields.songs}</a>
          <a href = "#">{view && view.menuheadings.fields.blog}</a>
          <a href = "#">{view && view.menuheadings.fields.events}</a>
          <a href = "#">{view && view.menuheadings.fields.subscribe}</a>
           </div>
          
          </div>
          </div>
          </section>
            </Fragment>
        );
    }
}
