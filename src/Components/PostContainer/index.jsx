import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Post } from "../Post";


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

const PostContainer = ({posts}) => {
    return(
        <StyledUserContainer>
             {
                posts.map( post => (  
                    <Post
                        title={post.title}
                        body={post.body}
                        key={post.id}
                    />
                ))
            }
        </StyledUserContainer>
    );
};


PostContainer.propTypes = {
    posts: PropTypes.array,
};

export { PostContainer };
