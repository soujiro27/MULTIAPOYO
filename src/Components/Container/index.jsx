import styled from "styled-components";

const StyledContainer = styled.div`
    padding: 20px 16px;
    background-color: ${props => props.bg};
    height:100vh;
    display: ${(props) => props.center ? "grid" : "block" };
    place-items: center;
    position: relative;
`;

export {StyledContainer};