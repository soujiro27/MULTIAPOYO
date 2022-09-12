import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../Title";
import { StyledText } from "../Text";
import PropTypes from "prop-types";

const StyledPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px ;
    border:1px solid var(--btn-primary);
    border-radius: 6px;
    padding: 8px 10px;
    width: 100%;
    &:hover{
        background-color: var(--btn-primary);
        color:var(--font-title-color);
        box-shadow: 3px 3px 3px var(--font-title-color);
    };
    @media (min-width: 768px) {
        width: 30%;
        height: 300px;
    };
    @media (min-width: 1440px) {
        width: 20%;
        height: 250px;
    };
`;

const Post = ({title, body}) => {
    return(
        <StyledPost>
            <StyledTitle>
                {title}
            </StyledTitle>
            <StyledText>{body}</StyledText>
        </StyledPost>
    );
};

Post.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
 };


export { Post };
