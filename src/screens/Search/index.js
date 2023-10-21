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


export default () => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <Container>
            <ContainerArea>
                <HeaderArea>
                    <HeaderTitle>Pesquisar</HeaderTitle>
                </HeaderArea>
            </ContainerArea>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </Container>
    )
}