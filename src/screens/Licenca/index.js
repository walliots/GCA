import React from "react";
import { Text } from "react-native";
import {
    Container,
    HeaderArea,
    HeaderTitle,
    TextTitle,
    ServiceArea,
    ContainerArea,
    ContainerMain
} from "./styles"

import styled from "styled-components/native";

import { SelectList } from 'react-native-dropdown-select-list'

export default () => {
    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '2', value: 'Licença para Ambulantes' },
        { key: '3', value: 'Aplicação' },
    ]

    return (
        
        <Container>
            <ContainerArea>
                <HeaderArea>
                    <HeaderTitle>Licenças</HeaderTitle>
                </HeaderArea>
            </ContainerArea>
            <ServiceArea>
                <TextTitle>Obter Licença</TextTitle>
            </ServiceArea>
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                boxStyles={{ borderColor: 'grey' }}
                placeholder="Selecione opção"
            />
            <ServiceArea>
                <TextTitle>Minhas Licenças</TextTitle>
            </ServiceArea>
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                placeholder="Selecione opção"
            />
        </Container>
    )
}