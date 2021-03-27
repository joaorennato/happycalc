import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import {
    Modal, 
    Fundo, 
    Janela, 
    JanelaDentro, 
    Titulo, 
    CampoArea, 
    CampoPicker, 
    CaixaTexto, 
    CaixaTextoPreco, 
    CloseButton
} from './styles';

import Image from 'react-native-scalable-image';

import BotaoDefault from '../ButtonDefault';
import AppContext from '../../contexts/Context';
import { Alert } from 'react-native';

export default ({modalVisible, setModalVisible}) => {

    const { state, dispatch } = useContext(AppContext);
    
    const [isIndividual, setIsIndividual] = useState(state.is_individual);
    const [qt, setQt] = useState();
    const [nomeProduto, setNomeProduto] = useState();
    const [preco, setPreco] = useState();
    const [precoRaw, setPrecoRaw] = useState();
    const [selectedUser, setSelectedUser] = useState(state.users.length > 0 ? state.users[0].nome : '');

    let qtInput = null;

    const handleAdd = () => {

        if( (!nomeProduto || nomeProduto == '') || (!preco || preco == '') || (!qt || qt == '') ){
            Alert.alert('Atenção','Preencha os campos!');
            return;
        }

        const getPrecoRaw = precoInput.getRawValue();
        const newItem = {
            id: Math.random()*100000,
            nome: isIndividual && selectedUser !== '' ? selectedUser : '',
            is_individual: isIndividual,
            quantidade: qt === 0 || qt === '' || qt === undefined ? 1 : qt,
            produto_nome: nomeProduto,
            preco: isNaN(getPrecoRaw) ? '0' : getPrecoRaw
        }

        dispatch({
            type: 'handleAddNewItem', 
            payload: newItem
        });

        setTimeout(()=>{
            closeModal();
        }, 200);

    }

    const closeModal = () => {
        setQt(`${1}`);
        setNomeProduto('');
        setPreco('');
        setModalVisible(false);
        setSelectedUser(state.users.length > 0 ? state.users[0].nome : '');
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible} 
            onShow={() => {
                qtInput.focus();
            }}
        >
            <Fundo behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <Janela>
                    <JanelaDentro>
                        <Titulo>Adicionar item</Titulo>
                        <CampoArea>
                            <CaixaTexto pequeno 
                                placeholder="Qt." 
                                placeholderTextColor="#444" 
                                value={qt}
                                onChangeText={t=>setQt(t)}
                                keyboardType="number-pad"
                                returnKeyType="next"
                                ref={(input) => { qtInput = input; }} 
                                onSubmitEditing={() => { nomeProdutoInput.focus(); }} 
                                blurOnSubmit={false}
                            />
                            <CaixaTexto 
                                placeholder="Informe o produto" 
                                placeholderTextColor="#444" 
                                value={nomeProduto}
                                onChangeText={t=>setNomeProduto(t)}
                                returnKeyType="next"
                                ref={(input) => { nomeProdutoInput = input; }} 
                                onSubmitEditing={() => { precoInput.getElement().focus(); }} 
                                blurOnSubmit={false}
                            />
                        </CampoArea>
                        <CampoArea>
                            <CaixaTextoPreco 
                                type={'money'}
                                placeholder="Informe o preço" 
                                placeholderTextColor="#444" 
                                value={preco} 
                                onChangeText={(text, masked)=>{
                                    setPreco(text);
                                    setPrecoRaw(masked);
                                }} 
                                keyboardType="number-pad" 
                                returnKeyType="done" 
                                ref={(refInput) => { precoInput = refInput; }} 
                            />
                        </CampoArea>

                        { isIndividual && state.users.length > 0 && <CampoPicker>
                            <Picker 
                                dropdownIconColor="#71104B" 
                                style={{ fontSize: 18 }} 
                                itemStyle={{ fontSize: 18 }} 
                                selectedValue={selectedUser} 
                                onValueChange={(itemValue, itemIndex) => setSelectedUser(itemValue) }
                            >
                                { state.users.map((item, key)=>(
                                    <Picker.Item 
                                        itemStyle={{fontSize:18}}
                                        key={key} 
                                        label={item.nome} 
                                        value={item.nome} 
                                    />
                                )) }       
                            </Picker>
                        </CampoPicker> }
                        
                        <CampoArea style={{ marginBottom: 0 }}>
                            <BotaoDefault onPress={handleAdd} texto="Adicionar" />
                        </CampoArea>
                    </JanelaDentro>
                    
                    <CloseButton onPress={closeModal}>
                        <Image
                            width={24} 
                            source={require('../../assets/close.png')} 
                        />
                    </CloseButton>
                </Janela>
            </Fundo>
        </Modal>
    );
}