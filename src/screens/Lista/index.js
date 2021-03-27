import React, { useState, useContext, useEffect } from 'react';

import {
    Container, InfosContainer, BotaoContainer, Header, Actions, AddPeople, AddItem, LogoArea
} from './styles';

import Image from 'react-native-scalable-image';
import { Image as Imagem } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { SwipeListView } from 'react-native-swipe-list-view';

import BotaoDefault from '../../components/ButtonDefault';
import ListItem from '../../components/ListItem';
import ListItemBack from '../../components/ListItemBack';

import AddModal from '../../components/AddModal';

import AppContext from '../../contexts/Context';

export default () => {

    const navigation = useNavigation();
    const { state, dispatch } = useContext(AppContext);

    const [isIndividual, setIsIndividual] = useState(state.is_individual);
    const [showModal, setShowModal] = useState(false);

    const handleNext = () => {
        navigation.navigate('Porcentagem');
    }

    handleParticipants = () => {
        if(isIndividual){
            navigation.navigate('Individual');
        } else {
            navigation.navigate('Igual', {
                pessoas: state.pessoas
            });
        }

    }

    const handleDelete = (item) => {
        dispatch({
            type: 'handleDeleteItem', 
            payload: item.id
        });
    }

    useEffect(()=>{
        console.log('STATE ATÉ SCREEN "LISTA"', state);
    }, []);

    return (
        <>
        <Container>
            <Header style={{
                marginTop: 30
            }}>
                <Imagem 
                    style={{
                        flex: 1,
                        aspectRatio: 4.89,
                        resizeMode: 'contain'
                    }}
                    source={require('../../assets/logo2.png')} 
                />

                <Actions>
                    <AddPeople onPress={handleParticipants}>
                        <Image
                            width={32} 
                            source={require('../../assets/add-friend.png')} 
                        />
                    </AddPeople>
                    <AddItem onPress={()=>{
                        setShowModal(true)
                    }}>
                        <Image
                            width={32} 
                            source={require('../../assets/add-item.png')} 
                        />
                    </AddItem>
                </Actions>
            </Header>

            <InfosContainer>
                <SwipeListView
                    style={{
                        paddingHorizontal: 20
                    }}
                    data={state.lista} 
                    keyExtractor={data => `${data.id}`} 
                    renderItem={(data, rowMap) => <ListItem item={data.item} />}
                    renderHiddenItem={ (data, rowMap) => <ListItemBack 
                        onDelete={()=>handleDelete(data.item)} />}
                    rightOpenValue={-75}
                    disableRightSwipe={true}
                />
            </InfosContainer>

            <BotaoContainer>
                <BotaoDefault onPress={handleNext} texto="Fechar a conta" />
            </BotaoContainer>
            
        </Container>

        <AddModal modalVisible={showModal} setModalVisible={setShowModal} />
        </>
    );
}