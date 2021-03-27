import React, { useState, useContext, useEffect } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';

import {
    Container, InfosContainer, Scroll, TextoBranco, InputDefault
} from './styles';

import BotaoDefault from '../../components/ButtonDefault';

import AppContext from '../../contexts/Context';

export default () => {

    const navigation = useNavigation();
    const { state, dispatch } = useContext(AppContext);

    const [users, setUsers] = useState('');

    let campoUsers = null;

    const handleUsers = () => {

        let u = users.split("\n");
        
        u.forEach(user=>{
            let jaTem = state.users.filter(item => item.nome.trim() === user.trim());

            if(user.trim() !== '' && jaTem.length <= 0){
                dispatch({
                    type: 'handleUsers', 
                    payload: {
                        id: Math.random()*100000,
                        nome: user.trim()
                    }
                });
            }
        });

        dispatch({
            type: 'setFinalizado', 
            payload: false
        });

        dispatch({
            type: 'handlePessoas', 
            payload: 0
        });

        navigation.navigate('Lista');
    }

    useEffect(()=>{
        campoUsers.focus();
        console.log('STATE ATÉ SCREEN "INDIVIDUAL"', state);
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
                    <TextoBranco style={{marginBottom: 5}}>
                        Me fala quem tá aí com você!
                    </TextoBranco>

                    <TextoBranco>
                        Um nome por linha, tá?
                    </TextoBranco>

                    <InputDefault 
                        value={users} 
                        onChangeText={t=>setUsers(t)}
                        ref={(input) => { campoUsers = input; }}
                        placeholder="Digite aqui"
                        placeholderTextColor="#666666"
                        returnKeyType="done"
                        multiline={true}
                        textAlignVertical="top"
                    />
                    
                    <BotaoDefault onPress={handleUsers} texto="Bora lá!" />
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