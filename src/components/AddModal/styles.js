import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';

export const Modal = styled.Modal``;

export const Fundo = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .8);
    padding: 0 20px;
`;

export const Janela = styled.View`
    width: 100%;
    padding: 20px;
    background-color: #E882A5;
    border-radius: 5px;
`;

export const JanelaDentro = styled.ScrollView`
    width: 100%;
`;

export const Titulo = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #71104B;
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
`;

export const CampoArea = styled.View`
    width: 100%;
    min-height: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`;

export const CampoPicker = styled.TouchableOpacity`
    min-height: 40px;
    width: 100%;
    background-color: #EAEAEA;
    border-bottom-width: 1px;
    border-color: #666;
    margin-bottom: 30px;
`;

export const CaixaTexto = styled.TextInput`
    ${props => props.pequeno ? 'width: 60px;' : 'flex: 1;'}
    height: 50px;
    border-bottom-width: 1px;
    border-color: #666;
    background-color: #EAEAEA;
    padding: 5px 10px;
    margin-right: ${props => props.pequeno ? '10px' : '0'};
    font-size: 18px;
`;

export const CaixaTextoPreco = styled(TextInputMask)`
    width: ${props => props.pequeno ? '30px' : '100%'};
    border-bottom-width: 1px;
    border-color: #666;
    background-color: #EAEAEA;
    padding: 5px 10px;
    height: 50px;
    font-size: 18px;
`;

export const CloseButton = styled.TouchableOpacity`
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 5;
`;