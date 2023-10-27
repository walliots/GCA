import React, { useState } from "react";
import { Text, View, Modal, Button } from "react-native";
import {
  Container,
  HeaderArea,
  HeaderTitle,
  TextTitle,
  ServiceArea,
  ContainerArea,
  ContainerMain,
} from "./styles";

import styled from "styled-components/native";
import { SelectList } from 'react-native-dropdown-select-list'

export default () => {
  const [selected, setSelected] = useState("");
  const [modalVisible, setModalVisible] = useState(false); // estado do modal

  const data = [
    { key: '2', value: 'Licença para Ambulantes' },
    { key: '3', value: 'Aplicação' },
  ];

  const handleSelect = (val) => {
    setSelected(val);
    setModalVisible(true); // abre o modal ao selecionar uma opção
  };

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
        setSelected={handleSelect}
        data={data}
        save="value"
        boxStyles={{ borderColor: 'grey' }}
        placeholder="Selecione opção"
      />
      <ServiceArea>
        <TextTitle>Minhas Licenças</TextTitle>
      </ServiceArea>
      <SelectList
        setSelected={handleSelect}
        data={data}
        save="value"
        placeholder="Selecione opção"
      />

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, width: '80%' }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
              {selected} 
            </Text>
            <Text>Data de emissão: {new Date().toLocaleDateString()}</Text>
            <Button title="Baixar PDF" onPress={() => {}} />
            <Button title="Fechar" onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>
    </Container>
  );
};
