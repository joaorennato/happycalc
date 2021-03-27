import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #242424;
`;

export const Scroll = styled.ScrollView`
    width: 100%;
    z-index: 2;
`;

export const InfosContainer = styled.View`
    width: 100%;
    padding: 0 20px;
`;

export const TextoBranco = styled.Text`
    color: #FFFFFF;
    font-size: 18px;
    flex-wrap: wrap;
    margin-bottom: 30px;
    text-align: center;
`;

export const InputDefault = styled.TextInput`
    background-color: #F0F0F0;
    width: 100%;
    height: 60px;
    border-bottom-width: 2px;
    border-color: #E882A5;
    color: #666666;
    padding: 0 10px;
    font-size: 18px;
    margin-bottom: 30px;
`;