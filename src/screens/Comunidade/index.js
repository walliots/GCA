import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import {
    Container,
    HeaderArea,
    HeaderTitle,
    TextTitle,
    ServiceArea,
    ContainerArea,
    ServiceAreaNews,
    NewsTitle
} from "./styles"
import { Image } from 'react-native';


export default () => {
    return (
        <Container>
            <ContainerArea>
                <HeaderArea>
                    <HeaderTitle>Comunidade</HeaderTitle>
                </HeaderArea>
            </ContainerArea>
            <ServiceArea>
                <TextTitle>Noticias</TextTitle>
            </ServiceArea>
            <ServiceAreaNews>
                <Image
                    source={require('../../assets/limpa_nome.jpeg')}
                />
            </ServiceAreaNews>
            <ServiceArea>
                <NewsTitle>Feirão Limpa Nome vai atender pessoas físicas e jurídicas nesta quinta-feira (14) e sexta (15) no hall do Sebrae/AP, das 9h às 17h.</NewsTitle>
            </ServiceArea>
        </Container>
    )
}
