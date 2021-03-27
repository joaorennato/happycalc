import React, { useContext, useEffect } from 'react';
import { Platform } from 'react-native';

import { Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';

import { useNavigation } from '@react-navigation/native';

import {
    Container, Scroll, Loading
} from './styles';

import AppContext from '../../contexts/Context';
import { Api } from '../../data/lista';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {

    const navigation = useNavigation();
    const { dispatch } = useContext(AppContext);

    useEffect(async ()=>{

        // await AsyncStorage.setItem('happydados', JSON.stringify({
        //     is_individual: false,
        //     pessoas: 0,
        //     percent: 0,
        //     finalizado: true,
        //     users: [],
        //     lista: []
        // }));

        let initialState = await Api.getDados();
        Api.setDados(initialState);
        dispatch({
            type: 'setDados',
            payload: initialState
        });
        
        if(initialState.finalizado == true){
            setTimeout(()=>{

                dispatch({
                    type: 'zeraLista',
                    payload: []
                });
                dispatch({
                    type: 'zeraPessoas',
                    payload: 0
                });
                dispatch({
                    type: 'zeraUsers',
                    payload: []
                });
                navigation.reset({
                    routes: [{
                        name: 'Divisao'
                    }]
                });
            }, 500);
        } else {
            setTimeout(()=>{
                navigation.reset({
                    routes: [{
                        name: 'Lista'
                    }]
                });
            }, 500);
        }
    },[]);

    return (
        <Container colors={['#05003D', '#BC2180']}>
            <Scroll>
                <Image
                    width={Dimensions.get('window').width} 
                    source={require('../../assets/logo.png')} 
                    style={{marginTop: Platform.OS === 'ios' ? 60 : 30, marginBottom: 50}}
                />
                <Loading size="large" color="#FFFFFF" />
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