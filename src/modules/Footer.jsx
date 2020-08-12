import React, { Fragment, Component} from 'react'

import "../sass/2-components/_footer.scss";

class Footer extends Component {

  
    render () {

        return (

            <Fragment>
            <section className = "footer">
            <footer className = "footer__container">
            <h3 className = "footer__h3">All Right Reserved</h3>
            <h5 className = "footer__h5">Developed by Ali Dhuniya</h5>
            <h6 className = "footer__h6">&copy; 2020</h6>
            </footer>
            </section>
            </Fragment>

        );
    }
}

export default Footer;