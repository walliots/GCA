import React, {useEffect} from "react";
import {Container, LoadingIcon} from "./styles"
import GcaLogo from "../../assets/gcalogoupdate.svg";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

export default () => {

    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () =>{
            const token = await AsyncStorage.getItem('token');
            if (token !== null){
                //
            }else{
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, []);
    return(
        <Container>
            <GcaLogo width="100%" height="100%"/>
            <LoadingIcon size="large" color="#FF8BEB"/>
        </Container>
    )
}
