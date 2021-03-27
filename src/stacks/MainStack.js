import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Divisao from '../screens/Divisao';
import Igual from '../screens/Igual';
import Individual from '../screens/Individual';
import Lista from '../screens/Lista';
import Porcentagem from '../screens/Porcentagem';
import ResumoIgual from '../screens/ResumoIgual';
import ResumoIndividual from '../screens/ResumoIndividual';
import Fim from '../screens/Fim';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator initialRouteName="Preload" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="Divisao" component={Divisao} />
            <Stack.Screen name="Igual" component={Igual} />
            <Stack.Screen name="Individual" component={Individual} />
            <Stack.Screen name="Lista" component={Lista} />
            <Stack.Screen name="Porcentagem" component={Porcentagem} />
            <Stack.Screen name="ResumoIgual" component={ResumoIgual} />
            <Stack.Screen name="ResumoIndividual" component={ResumoIndividual} />
            <Stack.Screen name="Fim" component={Fim} />
        </Stack.Navigator>
    );
}