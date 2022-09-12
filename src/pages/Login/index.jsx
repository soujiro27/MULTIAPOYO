import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { joiResolver  } from "@hookform/resolvers/joi";
import { useDispatch, useSelector } from "react-redux";
import { sign_in } from "../../actions/login.actions";
import { login } from "./schema";
import { Loader } from "../../Components/Loader";
import { LoginUI } from "./loginUI";
import { StyledContainer } from "../../Components/Container";



const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver:joiResolver((login()))
    });

    const loading = useSelector( store => store.Login.loading);
    const token = useSelector( store => store.Login.token);
    
    const onSubmit = data => dispatch(sign_in(data));

    if(token){
        navigate("/dashboard");
    }

    return(
        <StyledContainer 
            bg="var(--login-bg-color)"
            center={true}
        >
            <LoginUI
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                errors={errors}
            />
            <Loader isOpen={loading} />
        </StyledContainer>
    );
};
export {Login};