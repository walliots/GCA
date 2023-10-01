import React from "react";
import styled from "styled-components/native";

const ServiceArea = styled.View`
    width: 100%;
    height: 90px;
    background-color: #54B4C7;
    flex-direction: row;
    border-radius: 30px;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 20px;
    justify-content: center;
`;

export default () => {
    return (
        <ServiceArea></ServiceArea>
    );
}