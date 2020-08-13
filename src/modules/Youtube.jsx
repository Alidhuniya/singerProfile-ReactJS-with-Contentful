import React, {Component, Fragment} from 'react';


class Youtube extends Component {

    
    render () {
        const Frame = {
     
           marginTop: "3rem"
        }

        // const Display = {
        //     display: "block",
        // marginRight: "auto",
        // marginLeft: "auto"

        // }

        const Div1 = {
          
            fontSize: "10px",
             color: "#cccccc",
             lineBreak: "anywhere",
             wordBreak: "normal",
             overflow: "hidden",
             whiteSpace: "nowrap",
             textOverflow: "ellipsis",
             fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
             fontWeight: "100"
        }

        const Href1 = {
            color: "#cccccc", 
            textDecoration: "none"
        }

        const Href2 = {
            color: "#ccccc",
             textDecoration: "none"
        }
        return (
            <Fragment>
            <h1 style = {Frame}>Youtube Channel</h1>
            <iframe  width = "720" height = "350"  src="https://www.youtube.com/embed/videoseries?list=PL-ZW1unRt6AvMmbP9N7nyW5c8drKqo15X&index=2&t=13s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h1 style = {Frame}>Songs Playlist</h1>
            <iframe   width="70%" height="500" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1076225575&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style = {Div1}><a style = {Href1} href="https://soundcloud.com/nico-stockfisch" title="Nico Stockfisch" target="_blank">Nico Stockfisch</a> · <a style = {Href2} href="https://soundcloud.com/nico-stockfisch/sets/tommorowland-2019" title="Tommorowland 2019" target="_blank">Tommorowland 2019</a></div>
            </Fragment>
        );
    }
}

export default Youtube;