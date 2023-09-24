import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessagebutton,
    SignMessagebuttonText,
    SignMessagebuttonTextBold
} from "./styles"

import Api from "../../Api";

import { Alert, Text } from "react-native";
import GcaLogo from "../../assets/gcalogoupdate.svg";
import SignInput from "../../components/SignInput";
import EmailIcon from "../../assets/email.svg"
import LockIcon from "../../assets/lock.svg"

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }
    
    const handleSignClick = () => {

    }

    return (
        <Container>
            <GcaLogo width="100%" height="160px" />

            <InputArea>
                <SignInput
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />
                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t => setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessagebutton onPress={handleMessageButtonClick}>
                <SignMessagebuttonText>Ainda não possui uma conta?</SignMessagebuttonText>
                <SignMessagebuttonTextBold>Cadastre-se</SignMessagebuttonTextBold>
            </SignMessagebutton>

        </Container>
    )
}
