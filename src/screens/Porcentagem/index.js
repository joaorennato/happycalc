import React, { useState, useContext, useEffect } from 'react';
import { Platform } from 'react-native';

import {
    Container, Scroll, InfosContainer, TextoBranco, InputDefault
} from './styles';

import { useNavigation } from '@react-navigation/native';

import { Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';

import BotaoDefault from '../../components/ButtonDefault';

import AppContext from '../../contexts/Context';

export default () => {

    const navigation = useNavigation();
    const { state, dispatch } = useContext(AppContext);

    const [percent, setPercent] = useState(`${state.percent}`);
    const [isIndividual, setIsIndividual] = useState(state.is_individual);

    let campoPercent = null;

    const handleNext = () => {

        dispatch({
            type: 'handleSetPercent',
            payload: percent == '' || percent == '0' || percent == 0  ? 0 : percent
        });

        let nextScreen = isIndividual ? 'ResumoIndividual' : 'ResumoIgual';

        navigation.navigate(nextScreen);
    }

    useEffect(()=>{
        campoPercent.focus();
        console.log('STATE ATÉ SCREEN "PORCENTAGEM"', state);
    }, []);

    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Scroll>
                <Image
                    width={(Dimensions.get('window').width)-40}  
                    source={require('../../assets/logo2.png')} 
                    style={{
                        marginTop: Platform.OS === 'ios' ? 60 : 30,
                        marginBottom: 50,
                        marginLeft: 20
                    }}
                />

                <InfosContainer>
                    <TextoBranco style={{marginBottom: 5, fontSize:48, fontWeight: 'bold'}}>
                        Mas já?!
                    </TextoBranco>

                    <TextoBranco style={{marginBottom: 5}}>
                        Me fala qual é a % do garçom?
                    </TextoBranco>
                    
                    <TextoBranco style={{fontSize: 14}}>
                        (se não tiver, deixe como zero mesmo)
                    </TextoBranco>

                    <InputDefault 
                        value={percent} 
                        onChangeText={t=>setPercent(t)}
                        ref={(input) => { campoPercent = input; }}
                        placeholder='Digite aqui' 
                        placeholderTextColor="#666666"
                        keyboardType="number-pad"
                        returnKeyType="done"
                    />

                    <BotaoDefault onPress={handleNext} texto="Fechar a conta" />
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