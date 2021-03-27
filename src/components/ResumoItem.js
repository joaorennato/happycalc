import React from 'react';
import styled from 'styled-components/native';

export default ({nome, valor, destaque = false, firstBold = false, isLast = false}) => {
    return (
        <ItemArea destaque={destaque} isLast={isLast}>
            <Dados destaque={destaque} firstBold={firstBold}>{nome}</Dados>
            <DadosBold>{valor}</DadosBold>
        </ItemArea>
    );
}

const ItemArea = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.destaque == true ? '#E882A5' : 'transparent'};
    margin-bottom: ${props => props.isLast == true ? '20px' : '0'};
`;

const Dados = styled.Text`
    font-size: 18px;
    color: ${props => props.destaque == true ? '#333' : '#444'};
    font-weight: ${props => props.firstBold == true ? 'bold' : 'normal'};
`;

const DadosBold = styled(Dados)`
    color: #333;
    font-weight: bold;
`;