import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './src/contexts/Context';
import MainStack from './src/stacks/MainStack';

export default () => {
    return (
        <AppProvider>
            <NavigationContainer>
              <MainStack />
            </NavigationContainer>
        </AppProvider>
    );
}