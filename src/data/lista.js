import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
    is_individual: false,
    pessoas: 0,
    percent: 0,
    finalizado: true,

    users: [],

    lista: []
};

export const Api = {
    getDados: async () => {
        pegaDados = await AsyncStorage.getItem('happydados');
        if(JSON.parse(pegaDados)){
            dados = JSON.parse(pegaDados);
        } else {
            await AsyncStorage.setItem('happydados', JSON.stringify({
                is_individual: false,
                pessoas: 0,
                percent: 0,
                finalizado: true,
                users: [],
                lista: []
            }));
            pegaDados = await AsyncStorage.getItem('happydados');
            dados = JSON.parse(pegaDados);
        }

        return dados;
    },

    setDados: async (state) => {
        await AsyncStorage.setItem('happydados', JSON.stringify(state));
    }    
}