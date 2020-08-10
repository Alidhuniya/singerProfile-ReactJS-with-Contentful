import React, { Fragment, Component} from 'react';
import { Client } from './../Client';


export default class Sidebar extends Component {
    
    componentDidMount() {
          Client.getEntries()
          .then((entries) => {
              console.log(entries.items[1])
          })
          .catch(console.error)
          
        }
    render() {
        return (
            <Fragment>
            <h1>Sidebar</h1>
            </Fragment>
        );
    }
}
