import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_posts } from "../../actions/posts.actions";
import { StyledTitle } from "../../Components/Title";
import { StyledContainer } from "../../Components/Container";
import { PostContainer } from "../../Components/PostContainer"; 
import { Loader } from "../../Components/Loader";

const Posts = () => {
    
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(get_posts(id));
    },[]);

    const posts = useSelector( store => store.Posts.posts);
    const loading = useSelector( store => store.Posts.loading);
    
    return(
        <StyledContainer>
            <StyledTitle>Posts</StyledTitle>
            <PostContainer posts={posts} />
            <Loader isOpen={loading} />
        </StyledContainer>
    );
};

export { Posts };