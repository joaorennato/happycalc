import React, { useState, useEffect, useContext } from 'react';
import { Platform } from 'react-native';

import { Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';

import {
    Container, Scroll, InfosContainer, ResumoArea, ResumoItemContainer, BotaoContainer
} from './styles';

import { useNavigation } from '@react-navigation/native';

import BotaoDefault from '../../components/ButtonDefault';
import ResumoItem from '../../components/ResumoItem';
import ResumoTitulo from '../../components/ResumoTitulo';

import AppContext from '../../contexts/Context';

export default () => {

    const navigation = useNavigation();
    const { state, dispatch } = useContext(AppContext);

    const [total, setTotal] = useState();
    const [totalPercent, setTotalPercent] = useState();
    const [percent, setPercent] = useState();
    const [percentIndividual, setPercentIndividual] = useState();

    const getValores = () => {
        
        let valorTotal = 0;
        state.lista.forEach(item => {
            valorTotal = valorTotal + (item.quantidade*item.preco);
        });

        let valorPercent = (valorTotal*state.percent)/100;
        let valorTotalPercent = (valorTotal+valorPercent);
        let valorPercentIndividual = valorPercent/state.users.length;

        setTotal(parseFloat(valorTotal).toFixed(2));
        setPercent(parseFloat(valorPercent).toFixed(2));
        setTotalPercent(parseFloat(valorTotalPercent).toFixed(2));
        setPercentIndividual(parseFloat(valorPercentIndividual).toFixed(2));
    }

    const handleNext = () => {
        navigation.navigate('Fim');
    }

    useEffect(()=>{
        getValores();
        console.log('STATE ATÉ SCREEN "RESUMO INDIVIDUAL"', state);
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
                        <ResumoItem nome="Serviço" valor={`${state.percent}% - R$ ${percent}`} />
                        <ResumoItem nome="Total da Conta" valor={`R$ ${totalPercent}`} />

                        { state.lista.length > 0 && <ResumoTitulo valor="Resumo" /> }

                        { state.lista.length > 0 && state.users.length > 0 && state.users.map((user, key) => {
                            
                            let valorUser = 0;
                            valorUser = parseFloat(valorUser) + parseFloat(percentIndividual);

                            return (
                                <ResumoItemContainer key={`${key}`}>
                                    <ResumoItem nome={user.nome} firstBold={true} />
                                    { state.lista.length > 0 && state.lista.map((item, chave)=>{
                                        if(item.nome === user.nome){
                                            valorUser = valorUser + (item.quantidade*item.preco)
                                        }

                                        return (
                                            item.nome === user.nome && <ResumoItem key={`${chave}`} nome={`${item.quantidade}x ${item.produto_nome}`} valor={`R$ ${parseFloat(item.quantidade*item.preco).toFixed(2)}`} />
                                        )
                                    }) }
                                    <ResumoItem nome="Serviço p/ pessoa" valor={`R$ ${percentIndividual}`} />
                                    <ResumoItem nome="Total" valor={`R$ ${parseFloat(valorUser).toFixed(2)}`} firstBold={true} destaque={true} isLast={true} />
                                </ResumoItemContainer>
                            )
                        }) }

                    </ResumoArea>

                </InfosContainer>
            </Scroll>

            <BotaoContainer>
                <BotaoDefault onPress={handleNext} texto="Finalizar" />
            </BotaoContainer>
        </Container>
    );
}