import React, { useState, useContext, useEffect } from 'react';
import { Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';

import {
    Container, Scroll, InfosContainer, ResumoArea, BotaoContainer
} from './styles';

import BotaoDefault from '../../components/ButtonDefault';
import ResumoItem from '../../components/ResumoItem';
import ResumoTitulo from '../../components/ResumoTitulo';

import AppContext from '../../contexts/Context';

export default () => {

    const navigation = useNavigation();
    const { state, dispatch } = useContext(AppContext);

    const [total, setTotal] = useState();
    const [percent, setPercent] = useState();
    const [igual, setIgual] = useState();

    const getValores = () => {
        
        let valorTotal = 0;
        state.lista.forEach(item => {
            valorTotal = valorTotal + (item.quantidade*item.preco);
        });

        let valorPercent = (valorTotal*state.percent)/100;
        let valorIgual = (valorTotal+valorPercent)/state.pessoas;

        setTotal(parseFloat(valorTotal).toFixed(2));
        setPercent(parseFloat(valorPercent).toFixed(2));
        setIgual(parseFloat(valorIgual).toFixed(2));
    }

    const handleNext = () => {
        navigation.navigate('Fim');
    }

    useEffect(()=>{
        getValores();
        console.log('STATE ATÉ SCREEN "RESUMO IGUAL"', state);
    }, []);

    return (
        <Container>
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
                    
                    <ResumoArea>
                        <ResumoItem nome="Total" valor={`R$ ${total}`} />
                        <ResumoItem nome="Taxa de Serviço" valor={`R$ ${percent}`} />
                        <ResumoItem nome="Pessoas" valor={state.pessoas} />
                        <ResumoItem nome="Valor por pessoa" valor={`R$ ${igual}`} />

                        { state.lista.length > 0 && <ResumoTitulo valor="Resumo" /> }

                        { state.lista.length > 0 && state.lista.map((item, key) => (
                            <ResumoItem key={key} nome={`${item.quantidade}x ${item.produto_nome}`} valor={`R$ ${parseFloat(item.quantidade*item.preco).toFixed(2)}`} />
                        )) }
                    </ResumoArea>
                </InfosContainer>
            </Scroll>

            <BotaoContainer>
                <BotaoDefault onPress={handleNext} texto="Finalizar" />
            </BotaoContainer>
        </Container>
    );
}