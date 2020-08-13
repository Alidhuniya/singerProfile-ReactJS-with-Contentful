import React, {Component, Fragment} from 'react';


class Youtube extends Component {

    
    render () {
        const Frame = {
           textAlign: "center"
        }

        const Display = {
            display: "block",
        marginRight: "auto",
        marginLeft: "auto"
        }
        return (
            <Fragment>
            <h1 style = {Frame}>Youtube Channel</h1>
            <iframe style = {Display} width = "720" height = "350"  src="https://www.youtube.com/embed/videoseries?list=PL-ZW1unRt6AvMmbP9N7nyW5c8drKqo15X&index=2&t=13s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   
            </Fragment>
        );
    }
}

export default Youtube;