import React, { Fragment, Component} from 'react';
var contentful = require('contentful');

export default class Sidebar extends Component {
    
    componentDidMount() {
        var client = contentful.createClient({
            space: 'z5brs5mrqys2',
            accessToken: 'gra_-04l_O8Iueoa3VgVjCUN5cA-E8v36K9iNCdFuSQ'
          })

          client.getEntries()
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
