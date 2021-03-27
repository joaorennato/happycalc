import React from 'react';
import styled from 'styled-components/native';

export default ({texto, onPress}) => {
    return (
        <Botao onPress={onPress}>
            <Texto>{texto}</Texto>
        </Botao>
    );
}

const Botao = styled.TouchableOpacity.attrs({
    activeOpacity: 0.6
})`
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: #FFFFFF;
    margin-bottom: 30px;
`;

const Texto = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #71104B;
    text-transform: uppercase;
`;