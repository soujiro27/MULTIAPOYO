import React from "react";
import PropTypes from "prop-types";
import { StyledTitle } from "../Title";
import { StyledText } from "../Text";
import styled from "styled-components";


const  StyledUserInfo = styled.div`
   position:absolute;
   top:0;
   left: ${props => props.isShow ? "0" : "-1440px"};
   background-color: var(--btn-primary);
   width: 90%;
   height: 100vh;
   transition: 2s ;
   padding: 20px 16px;
   display: flex;
   flex-direction: column;
   align-items: center;
   box-shadow: 3px 0px 3px var(--font-title-color);
   @media(min-width: 768px){
       width: 34%;
    };
    @media(min-width: 1440px){
       width: 25%;
    };
    @media(min-width: 1441px){
       width: 15%;
    };
`;

const StyledUserImage = styled.img`
    border-radius: 50%;
    box-shadow: 3px 3px 3px var(--font-title-color);
`;

const StyledUserClose = styled.p`
    font-size: 3rem;
    color: var(--btn-primary);
    align-self: flex-end;
    background-color: white;
    width: 30px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
`;

const StyledLink = styled.a`
    margin: 5px 0px;
    font-size: 1.2rem;
    color:var(--font-color);
    text-decoration: none;
    cursor: pointer;
`;

const UserInfo = ({ userInfo, isShow, handle_close_userInfo}) => {

   if(isShow){
    window.scroll(0,0);
   }
 
   return(
    <StyledUserInfo  isShow={isShow}>
        <StyledUserClose onClick={handle_close_userInfo}>X</StyledUserClose>
        <StyledUserImage src={userInfo.avatar} alt={userInfo.first_name} />
        <StyledTitle>
            {userInfo.first_name + " " + userInfo.last_name}
        </StyledTitle>
        <StyledText>
            {userInfo.email}
        </StyledText>
        <StyledLink href={`/posts/${userInfo.id}`} >{userInfo.first_name + " " + userInfo.last_name} Posts</StyledLink>
        <StyledLink href={`/albums/${userInfo.id}`} >{userInfo.first_name + " " + userInfo.last_name} Albums</StyledLink>
    </StyledUserInfo>
   );
};

UserInfo.propTypes = {
    userInfo: PropTypes.object,
    isShow: PropTypes.bool,
    handle_close_userInfo: PropTypes.func
};

export { UserInfo };
