import React, { useContext, useEffect } from 'react';
import { Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';

import {
    Container, Scroll, TextoBranco, InfosContainer
} from './styles';

import BotaoDefault from '../../components/ButtonDefault';

import AppContext from '../../contexts/Context';

export default () => {

    const navigation = useNavigation();
    const { state, dispatch } = useContext(AppContext);

    const handleEnd = () => {
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

            dispatch({
                type: 'handleSetPercent',
                payload: 0
            });

            dispatch({
                type: 'setFinalizado',
                payload: true
            });

            navigation.reset({
                routes: [{
                    name: 'Preload'
                }]
            });
        }, 500);
    }

    useEffect(()=>{
        console.log('STATE ATÉ SCREEN "FIM"', state);
    }, []);

    return (
        <Container colors={['#05003D', '#BC2180']}>
            <Scroll>
                <Image
                    width={Dimensions.get('window').width} 
                    source={require('../../assets/logo.png')} 
                    style={{marginTop: Platform.OS === 'ios' ? 60 : 30, marginBottom: 50}}
                />

                <InfosContainer>
                    <TextoBranco>
                        É hora de ir pra casa, mas lembre-se: {"\n"}{"\n"}
                        Se bebeu, por favor não dirija!{"\n"}
                        Chame um Uber, um Táxi, peça pra um amigo que não bebeu dirigir pra você.{"\n"}{"\n"}
                        Fique seguro hoje para poder se divertir amanhã!
                    </TextoBranco>
                    
                    <BotaoDefault onPress={handleEnd} texto="Até mais!" />
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