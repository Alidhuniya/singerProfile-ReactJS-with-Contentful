import React, { Fragment, Component} from 'react';

import { Client } from './../Client';
import "../sass/2-components/_sidebar.scss";
// import Home from './../pages/Home';
// import Aboutpage from './../pages/Aboutpage';
import {
  Link
} from "react-router-dom";


export default class Sidebar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            section: ""
        }
    }
    
    componentDidMount() {
      Client.getEntry("3VhrFwooIpqpHDuZTZ2axF")
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
       
    render() {

        const view = this.state.section;
        
        console.log(view);
        const { heading} = view; // here I'm destructing objects so I only have to type heading without view.heading
        return (
            <Fragment >
          <section className = "sidebar">
          <div className = "sidebar__block">
          <div className = "sidebar__contents">
         {view && <img className = "sidebar__img" src = {view.profileimg.fields.file.url} alt = {heading} title = {heading} /> }
           <h1 className = "sidebar__h1">{heading}</h1>
         
           {/*
            <div className = "sidebar__menus">
           
        <a className = "sidebar__menusLinks " href = "#"><i className = "fa fa-home icon-size "></i>{view && view.menuheadings.fields.home}</a>
          <a className = "sidebar__menusLinks"  href = "#"><i className = "fa fa-user-circle icon-size"></i>{view && view.menuheadings.fields.about}</a>
        
          <a className = "sidebar__menusLinks"  href = "#"><i className = " fa fa-bookmark icon-size"></i>{view && view.menuheadings.fields.upcoming}</a>
          <a className = "sidebar__menusLinks"  href = "#"><i className = " fa fa-music icon-size"></i>{view && view.menuheadings.fields.songs}</a>
          <a className = "sidebar__menusLinks"  href = "https://medium.com/topic/music"><i className = " fab fa-blogger-b icon-size"></i>{view && view.menuheadings.fields.blog}</a>
          <a className = "sidebar__menusLinks"  href = "#"><i className = " fa fa-users icon-size"></i>{view && view.menuheadings.fields.events}</a>
          <a className = "sidebar__menusLinks"  href = "#"><i className = " fa fa-bell icon-size"></i>{view && view.menuheadings.fields.subscribe}</a>
        
          </div>

           */}
         

           <div className = "sidebar__menus">
           <Link className = "sidebar__menusLinks " to="/"><i className = "fa fa-home icon-size "></i>{view && view.menuheadings.fields.home}</Link>
           <Link className = "sidebar__menusLinks " to="/about"><i className = "fa fa-user-circle icon-size"></i>{view && view.menuheadings.fields.about}</Link>
           <Link className = "sidebar__menusLinks " to="/upcoming"><i className = " fa fa-bookmark icon-size"></i>{view && view.menuheadings.fields.upcoming}</Link>
           <Link className = "sidebar__menusLinks " to="/songs"><i className = " fa fa-music icon-size"></i>{view && view.menuheadings.fields.songs}</Link>
           <a className = "sidebar__menusLinks"  href = "https://medium.com/topic/music"><i className = " fab fa-blogger-b icon-size"></i>{view && view.menuheadings.fields.blog}</a>
          {/* <Link className = "sidebar__menusLinks " to="/blog"><i className = " fa fa-users icon-size"></i>{view && view.menuheadings.fields.events}</Link> */}
           <Link className = "sidebar__menusLinks " to="/subscribe"><i className = " fa fa-bell icon-size"></i>{view && view.menuheadings.fields.subscribe}</Link>

          </div>

           </div>
          </div>

          </section>
            </Fragment>
        );
    }
}
