import React from 'react';
import styled from 'styled-components/native';

export default ({valor}) => {
    return (
        <ResumoTitulo>
            {valor}
        </ResumoTitulo>
    );
}

const ResumoTitulo = styled.Text`
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom-width: 2px;
    border-top-width: 2px;
    border-color: #E62552;
    margin: 30px 0;
    padding: 10px 0;
`;