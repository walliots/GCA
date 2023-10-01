import React from "react";
import { Text } from "react-native";
import Services from "../../components/Services";

import {
    Container,
    HeaderArea,
    HeaderTitle
} from "./styles"


export default () => {
    return (
        <Container>
            <HeaderArea>
                <HeaderTitle>Serviços</HeaderTitle>
            </HeaderArea>      
            <Services><Text>Licenças</Text></Services>
            <Services></Services>
            <Services></Services>
            <Services></Services>
            <Services></Services>
        </Container>
    )
}