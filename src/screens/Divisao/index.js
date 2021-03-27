import React, { useContext, useEffect } from 'react';
import { Platform } from 'react-native';

import { Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';

import { useNavigation } from '@react-navigation/native';
import {
    Container, InfosContainer, Scroll, TextoBranco
} from './styles';

import BotaoDefault from '../../components/ButtonDefault';

import AppContext from '../../contexts/Context';

export default () => {

    const navigation = useNavigation();
    const { state, dispatch } = useContext(AppContext);

    const handleIndividual = (value) => {
        dispatch({
            type: 'handleIndividual', 
            payload: value
        });

        value === true ? navigation.navigate('Individual') : navigation.navigate('Igual');
    }

    const handlePessoas = (value) => {
        dispatch({
            type: 'handlePessoas', 
            payload: value
        });
    }

    useEffect(()=>{
        console.log('STATE ATÉ SCREEN "DIVISAO"', state);
    }, []);

    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Scroll>
                <Image
                    width={Dimensions.get('window').width} 
                    source={require('../../assets/bora.png')} 
                    style={{marginTop: Platform.OS === 'ios' ? 60 : 30, marginBottom: 50}}
                />
                <InfosContainer>
                    
                    <TextoBranco>
                        Como vocês vão dividir a conta?
                    </TextoBranco>
                    <BotaoDefault onPress={()=>{
                        handleIndividual(false);
                    }} texto="Em parte iguais" />
                    <BotaoDefault onPress={()=>{
                        handlePessoas(0);
                        handleIndividual(true);
                    }} texto="Cada um paga o seu" />
                </InfosContainer>
            </Scroll>
            
            <Image
                width={Dimensions.get('window').width} 
                source={require('../../assets/friends.png')} 
                style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0
                }}
            />
        </Container>
    );
}