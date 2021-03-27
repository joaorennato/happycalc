import styled from 'styled-components/native';

export const ListItemWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 4px;
`;

export const Infos = styled.View`
    flex: 1;
`;

export const Texto = styled.Text`
    font-size: 16px;
    color: #444;
`;

export const Price = styled(Texto)`
    color: #333;
    font-weight: bold;
`;