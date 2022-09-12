import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { User } from "../User";


const StyledUserContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 768px){
        flex-direction: row;
        flex-wrap: wrap;
        gap: 35px;
    };
`;

const UsersContainer = ({users, handle_user_info}) => {
    return(
        <StyledUserContainer>
             {
                users.map( user => (  
                    <User
                        user={user}
                        handle_user_info={handle_user_info}
                        key={user.id}
                    />
                ))
            }
        </StyledUserContainer>
    );
};


UsersContainer.propTypes = {
    users: PropTypes.array,
     handle_user_info: PropTypes.func
};

export { UsersContainer };
