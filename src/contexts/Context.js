import React, { createContext, useReducer } from 'react';
import initialState, { Api } from '../data/lista';

const AppContext = createContext({});

const actions = {
    setDados(state, action){
        Api.setDados(action.payload);
        return action.payload
    },
    zeraLista(state, action){
        let newState = {...state, lista: action.payload};
        Api.setDados(newState);
        return {
            ...state,
            lista: action.payload
        }
    },
    zeraUsers(state, action){
        let newState = {...state, users: action.payload};
        Api.setDados(newState);
        return {
            ...state,
            users: action.payload
        }
    },
    zeraPessoas(state, action){
        let newState = {...state, pessoas: action.payload};
        Api.setDados(newState);
        return {
            ...state,
            pessoas: action.payload
        }
    },
    setFinalizado(state, action){
        let newState = {...state, finalizado: action.payload};
        Api.setDados(newState);
        return {
            ...state, 
            finalizado: action.payload
        }
    },
    handleIndividual(state, action){
        let newState = {...state, is_individual: action.payload};
        Api.setDados(newState);
        return {
            ...state,
            is_individual: action.payload
        }
    },
    handlePessoas(state, action){
        let newState = {...state, pessoas: action.payload};
        Api.setDados(newState);
        return {
            ...state,
            pessoas: action.payload
        }
    },
    handleUsers(state, action){
        let newState = {...state, users: [...state.users, action.payload]};
        Api.setDados(newState);
        return {
            ...state,
            users: [...state.users, action.payload]
        }
    },
    handleAddNewItem(state, action){
        let newState = {...state, lista: [action.payload, ...state.lista]};
        Api.setDados(newState);
        return {
            ...state,
            lista: [action.payload, ...state.lista]
        }
    },
    handleDeleteItem(state, action){
        item = action.payload;
        let newState = {...state, lista: state.lista.filter(i => i.id !== item)};
        Api.setDados(newState);
        return {
            ...state,
            lista: state.lista.filter(i => i.id !== item)
        }
    },
    handleSetPercent(state, action){
        let newState = {...state, percent: action.payload};
        Api.setDados(newState);
        return {
            ...state,
            percent: action.payload
        }
    }
}

export const AppProvider = props => {

    function reducer(state, action){
        const fn = actions[action.type];
        return fn ? fn(state, action) : state;
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{
            state, dispatch
        }}>
            { props.children }
        </AppContext.Provider>
    );
}

export default AppContext;