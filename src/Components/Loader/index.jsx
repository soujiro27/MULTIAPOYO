import React from "react";
import PropTypes from "prop-types";
import  ReactDOM from "react-dom";
import "./style.css";

const Loader = ({isOpen}) => {
   
    if(!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="loader-container loader-message">
           <span className="loader"></span>
        </div>,
        document.getElementById("portal")
    );
};

Loader.propTypes = {
    isOpen : PropTypes.checkPropTypes
};

export { Loader };