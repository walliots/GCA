import React from "react";
import { Text } from "react-native";
import Services from "../../components/Services";

import styled from "styled-components/native";

import Lic from "../../assets/license.svg"

import Taxes from "../../assets/taxes.svg"

import Educacao from "../../assets/education3.svg"

import Perfomance from "../../assets/performance3.svg"

import Comunidade from "../../assets/community.svg"

import {
    Container,
    HeaderArea,
    HeaderTitle,
    TextTitle,
    ServiceArea
} from "./styles"
import { useNavigation } from "@react-navigation/native";

const TabItem = styled.TouchableOpacity`
    flex:1;
    justify-content:center;
    align-items:center;
`;

export default ({ state, navigation }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <Container>
            <HeaderArea>
                <HeaderTitle>Serviços</HeaderTitle>
            </HeaderArea>

            <ServiceArea>
                <TabItem onPress={() => goTo('Licenca')}>
                    <TextTitle>Licenças</TextTitle>
                    <Lic width="30" height="30" fill="#FFFFFF"></Lic>
                </TabItem>
            </ServiceArea>

            <ServiceArea>
                <TabItem onPress={() => goTo('Taxa')}>
                    <TextTitle>Taxa</TextTitle>
                    <Taxes width="30" height="30" fill="#FFFFFF"></Taxes>
                </TabItem>
            </ServiceArea>

            <ServiceArea>
                <TabItem onPress={() => goTo('Educacao')}>
                    <TextTitle>Educação</TextTitle>
                    <Educacao width="30" height="30" fill="#FFFFFF"></Educacao>
                </TabItem>
            </ServiceArea>

            <ServiceArea>
                <TabItem onPress={() => goTo('Desempenho')}>
                    <TextTitle>Desempenho</TextTitle>
                    <Perfomance width="30" height="30" fill="#FFFFFF"></Perfomance>
                </TabItem>
            </ServiceArea>

            <ServiceArea>
                <TabItem onPress={() => goTo('Comunidade')}>
                    <TextTitle>Comunidade</TextTitle>
                    <Comunidade width="30" height="30" fill="#FFFFFF"></Comunidade>
                </TabItem>
            </ServiceArea>

        </Container>
    )
}