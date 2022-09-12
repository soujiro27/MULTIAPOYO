import React from "react";
import PropTypes from "prop-types";
import { StyledTitle } from "../Title";
import { StyledText } from "../Text";
import styled from "styled-components";


const  StyledUser = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    border: 1px solid var(--font-title-color);
    padding: 20px 0px;
    border-radius: 6px;
    cursor: pointer;
    &:hover{
        box-shadow: 3px 3px 3px var(--font-title-color);
    }

    @media(min-width: 768px){
        width: 30%;
        margin-top: 0px;
    };
    @media (min-width:1440px){
        width:20%;
    };
`;

const StyledUserImage = styled.img`
    border-radius: 50%;
    box-shadow: 3px 3px 3px var(--font-title-color);
`;

const User = ({ user, handle_user_info}) => {


 
   return(
    <StyledUser onClick={ () => handle_user_info(user.id) }>
        <StyledUserImage src={user.avatar} alt={user.first_name} />
        <StyledTitle>
            {user.first_name + " " + user.last_name}
        </StyledTitle>
        <StyledText>
            {user.email}
        </StyledText>
    </StyledUser>
   );
};

User.propTypes = {
   user: PropTypes.object,
   handle_user_info: PropTypes.func
};

export { User };
