import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    background-color: #242424;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0 20px;
`; 

export const Actions = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const AddPeople = styled.TouchableOpacity.attrs({
    activeOpacity: 0.6
})`
    margin-right: 10px;
`;

export const AddItem = styled.TouchableOpacity.attrs({
    activeOpacity: 0.6
})``;

export const InfosContainer = styled.View`
    flex: 1;
    width: 100%;
    padding-bottom: 100px;
`;

export const BotaoContainer = styled.View`
    width: 100%;
    height: 90px;
    padding: 0 20px;
    position: absolute;
    left: 0; bottom: -10px;
`;
