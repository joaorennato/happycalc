import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
    flex: 1;
    align-items: center;
    justify-content: center;
    z-index: -1;
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
    background-color: #FFFFFF;
    color: #05003D;
    font-size: 18px;
    flex-wrap: wrap;
    margin-bottom: 30px;
    text-align: center;
    font-weight: 700;
    border-radius: 5px;
    padding: 10px;
    z-index: 2;
`;