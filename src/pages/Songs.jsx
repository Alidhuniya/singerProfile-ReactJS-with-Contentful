import React, {Component, Fragment} from 'react'
// import Sidebar from './../modules/Sidebar';
// import Footer from './../modules/Footer';
import Youtube from './../modules/Youtube';

class Songs extends Component {
    render () {
        return (
            <Fragment>
            {/* 
            <Sidebar />
            <Footer />
            */}
            <Youtube />
            </Fragment>
        );
    }
}

export default Songs;