import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Scroll = styled.ScrollView`
    width: 100%;
    z-index: 2;
`;

export const InfosContainer = styled.View`
    width: 100%;
    padding: 0 20px;
`;

export const Loading = styled.ActivityIndicator`
    margin: 30px;
`;