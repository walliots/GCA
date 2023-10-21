import React from "react";
import { Text } from "react-native";

import User from "../../assets/user2.svg"

import {
    Container,
    HeaderArea,
    HeaderTitle,
    TextTitle,
    ServiceArea,
    ContainerArea
} from "./styles"

export default () => {
    return (
        <Container>
            <ContainerArea>
                <HeaderArea>
                    <HeaderTitle>Configuração</HeaderTitle>
                </HeaderArea>
            </ContainerArea>
            <ServiceArea>
                <TextTitle>Usuário</TextTitle>
                <User width="30" height="30" fill="#FFFFFF"></User>
            </ServiceArea>
        </Container>
    )
}