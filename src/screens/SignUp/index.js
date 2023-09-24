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

import { Text } from "react-native";
import GcaLogo from "../../assets/gcalogoupdate.svg";
import SignInput from "../../components/SignInput";
import EmailIcon from "../../assets/email.svg"
import PersonIcon from "../../assets/person.svg"
import LockIcon from "../../assets/lock.svg"

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@firebase/auth';

export default () => {


    const navigation = useNavigation();

    const [email, setEmailField] = useState('');
    const [password, setPasswordField] = useState('');
    const [name, setNameField] = useState('');

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        });
    }

    const handleSignUp = () => {
        // const auth = getAuth();
        // auth
        //     .createUserWithEmailAndPassword(email, password)
        //     .then(userCredentials => {
        //         const user = userCredentials.user;
        //         console.log('Registered with:', user.email);
        //     })
        //     .catch(error => alert(error.message))
    }

    return (
        <Container>
            <GcaLogo width="100%" height="160px" />

            <InputArea>
                <SignInput
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChangeText={t => setEmailField(t)}
                />
                {/* <SignInput
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome"
                    value={name}
                    onChangeText={t => setNameField(t)}
                /> */}
                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={password}
                    onChangeText={t => setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignUp}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessagebutton onPress={handleMessageButtonClick}>
                <SignMessagebuttonText>Já possui uma conta?</SignMessagebuttonText>
                <SignMessagebuttonTextBold>Faça Login</SignMessagebuttonTextBold>
            </SignMessagebutton>

        </Container>
    )
}
