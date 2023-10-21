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

import styled from "styled-components/native";

import { SelectList } from 'react-native-dropdown-select-list'

export default () => {
    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '2', value: 'Taxa de manutenção' },
        { key: '3', value: 'Aplicação' },
    ]

    return (
        <Container>
            <ContainerArea>
                <HeaderArea>
                    <HeaderTitle>Taxas</HeaderTitle>
                </HeaderArea>
            </ContainerArea>
            <ServiceArea>
                <TextTitle>Taxas a pagar</TextTitle>
            </ServiceArea>
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                boxStyles={{ borderColor: 'grey' }}
                placeholder="Selecione opção"
            />
            <ServiceArea>
                <TextTitle>Taxas pagas</TextTitle>
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