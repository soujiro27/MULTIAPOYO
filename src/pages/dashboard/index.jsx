import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_users, get_user_info } from "../../actions/dashboard.actions";
import { Loader } from "../../Components/Loader";
import { UsersContainer } from "../../Components/UsersContainer"; 
import { UserInfo } from "../../Components/UserInfo";
import { StyledTitle } from "../../Components/Title";
import { ErrorMessage} from "../../Components/ErrorMessage";
import { StyledContainer } from "../../Components/Container";

const Dashboard = () => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(get_users());
    },[]);


    const loading = useSelector(store => store.Users.loading);
    const users = useSelector(store => store.Users.users);
    const userInfo = useSelector(store => store.Users.userInfo);

    const handle_user_info = (id) => {
        dispatch(get_user_info(id));
        setShow(true);
    };

    const handle_close_userInfo = () => setShow(false);


    return(
        <StyledContainer>
            <StyledTitle>
                User List
            </StyledTitle>
           
            <UsersContainer
                users={users}
                handle_user_info={handle_user_info}
            />
          
            <UserInfo 
                userInfo={userInfo} 
                isShow={show} 
                handle_close_userInfo={handle_close_userInfo}    
            />
             
            <Loader isOpen={loading} />
            <ErrorMessage isShow={users.length < 1} message="Sorry but, Dont have registers" />
        </StyledContainer>
    );
};


export { Dashboard };