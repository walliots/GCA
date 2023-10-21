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

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

import styled from "styled-components/native";

import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

import { SelectList } from 'react-native-dropdown-select-list'

export default () => {
    const [selected, setSelected] = React.useState("");

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    const data3 = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Março", "Junho"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Vendas"] // optional
    };

    const data = [
        { key: '1', value: 'Janeiro' },
        { key: '2', value: 'Fevereiro' },
        { key: '3', value: 'Março' },
        { key: '4', value: 'Abril' },
        { key: '5', value: 'Maio' },
        { key: '6', value: 'Junho' },
    ]

    return (
        <Container>
            <ContainerArea>
                <HeaderArea>
                    <HeaderTitle>Desempenho</HeaderTitle>
                </HeaderArea>
            </ContainerArea>
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                boxStyles={{ borderColor: 'grey', marginBottom: 10 }}
                placeholder="Selecione opção"
            />
            <LineChart
                data={data3}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        </Container>
    )
}