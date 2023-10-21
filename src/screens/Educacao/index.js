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
        { key: '2', value: 'Regulamentações Locais' },
        { key: '3', value: 'Higiene e Segurança Alimentar' },
        { key: '4', value: 'Empreendedorismo' },
        { key: '5', value: 'Marketing e Promoção' },
        { key: '6', value: 'Finanças Pessoais' },
        { key: '7', value: 'Atendimento ao Cliente' },
    ]
    const data2 = [
        { key: '2', value: 'Atendimento ao Cliente' },
        { key: '3', value: 'Finanças Pessoais' },
    ]

    return (
        <Container>
            <ContainerArea>
                <HeaderArea>
                    <HeaderTitle>Educação</HeaderTitle>
                </HeaderArea>
            </ContainerArea>
            <ServiceArea>
                <TextTitle>Cursos disponiveis</TextTitle>
            </ServiceArea>
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                boxStyles={{ borderColor: 'grey' }}
                placeholder="Selecione opção"
            />
            <ServiceArea>
                <TextTitle>Cursos realizados</TextTitle>
            </ServiceArea>
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={data2}
                save="value"
                placeholder="Selecione opção"
            />
        </Container>
    )
}