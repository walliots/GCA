import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #63C2D1;
    justify-content: center;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;