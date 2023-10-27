import React from "react";
import { Text } from "react-native";
import {
    Container,
    HeaderArea,
    HeaderTitle,
    TextTitle,
    ServiceArea,
    ContainerArea
} from "./styles"

import { Searchbar } from 'react-native-paper';

import styled from "styled-components/native";

import { SelectList } from 'react-native-dropdown-select-list'

import User from "../../assets/user2.svg"


export default () => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <Container>
            <ContainerArea>
                <HeaderArea>
                    <HeaderTitle>Configuracão</HeaderTitle>
                </HeaderArea>
            </ContainerArea>
            <ServiceArea>
                <TextTitle>Usuário</TextTitle>
                <User width="30" height="30" fill="#FFFFFF"></User>
            </ServiceArea>
        </Container>
    )
}