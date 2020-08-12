import React from 'react';
import "../sass/2-components/_error.scss";
import {
    Link
  } from "react-router-dom";
  

const Error = () => {
    return (
        <div className = "error">
        <h1 className = "error__h1">Ooops ! Page Not Found</h1>
        <Link className = "error__link" to="/">Return to Home</Link>
        </div>
    );
}


export default Error;