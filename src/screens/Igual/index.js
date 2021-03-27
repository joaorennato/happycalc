import React, { useState, useContext, useEffect } from 'react';
import { Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';

import {
    Container, InfosContainer, Scroll, TextoBranco, InputDefault
} from './styles';

import BotaoDefault from '../../components/ButtonDefault';

import AppContext from '../../contexts/Context';

export default () => {

    const navigation = useNavigation();
    const route = useRoute();

    const { state, dispatch } = useContext(AppContext);
    const [people, setPeople] = useState(route.params !== undefined ? `${route.params.pessoas}` : '');

    let qtPessoas = null;

    const handlePessoas = () => {
        
        dispatch({
            type: 'setFinalizado', 
            payload: false
        });

        dispatch({
            type: 'zeraUsers',
            payload: []
        });

        dispatch({
            type: 'handlePessoas', 
            payload: people
        });

        navigation.navigate('Lista');
    }

    useEffect(()=>{
        qtPessoas.focus();
        console.log('STATE ATÉ SCREEN "IGUAL"', state);
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
                        Quantas pessoas estão aí com você?
                    </TextoBranco>

                    <InputDefault 
                        value={people} 
                        onChangeText={t=>setPeople(t)}
                        ref={(input) => { qtPessoas = input; }} 
                        placeholder="Digite aqui"
                        placeholderTextColor="#666666"
                        keyboardType="number-pad"
                        returnKeyType="done"
                    />

                    <BotaoDefault onPress={()=>{
                        handlePessoas();
                    }} texto="Bora lá!" />
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