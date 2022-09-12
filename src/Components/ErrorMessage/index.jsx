import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledError = styled.p`
   color: var(--error-color);
   width: 100%;
   font-size:1.2rem;
`;

const ErrorMessage = ({ isShow, message}) => {
   
   if(!isShow) return null;

   return(
      <>
         <StyledError>
            {message}
         </StyledError>
      </>
   );
};

ErrorMessage.propTypes = {
   message: PropTypes.string,
   isShow: PropTypes.bool
};

export {ErrorMessage};