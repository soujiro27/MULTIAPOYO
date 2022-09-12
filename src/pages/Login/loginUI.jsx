import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import texts from "./text.json";
import { StyledTitle } from "../../Components/Title";
import { StyledText } from "../../Components/Text";
import { StyledInput } from "../../Components/Input";
import { StyledSubmit } from "../../Components/Button-primary";
import { ErrorMessage } from "../../Components/ErrorMessage";

const LoginUI = ({register, handleSubmit, onSubmit, errors}) => {

    const error = useSelector( store => store.Login.error);
    const error_message = useSelector( store => store.Login.message);

   const StyledLogin = styled.div`
    background:#fff;
    padding: 30px 50px;
    display:flex;
    flex-direction:column;
    align-items: center;
    border-radius: 6px;
   `; 

   const StyledForm = styled.form`
    width: 100%;
   `;

    return(
        <StyledLogin>
            <StyledTitle>
                {texts.title}
            </StyledTitle>

            <StyledText>
                {texts.description}
            </StyledText>

            <StyledForm  onSubmit={handleSubmit(onSubmit)}>
                <StyledInput 
                    type="text" 
                    placeholder={texts.email} 
                    {...register("email")} 
                />
                
                <ErrorMessage 
                    isShow={errors.email}
                    message={errors.email?.message} 
                />
                

                <StyledInput 
                    type="password" 
                    placeholder={texts.password} 
                    {...register("password")} 
                />
                
                <ErrorMessage
                    isShow={errors.password}
                    message={errors.password?.message}
                />
                
                <StyledSubmit type="submit" value={texts.submit}  />
                
                <ErrorMessage 
                    isShow={error}
                    message={error_message}
                />
                
                <StyledText>{texts.forgot}</StyledText>
            </StyledForm>
        </StyledLogin>
    );
};

LoginUI.propTypes = {
    register: PropTypes.func,
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
    errors: PropTypes.func
};

export { LoginUI };