import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReduce'
const initialState = {

    transactions: [
        
    ]
}

//crate context

export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({children})  =>{
    const [state,dispatch] = useReducer(AppReducer,initialState)
    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function AddTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        })
    }

    function resetTransactions(){
        dispatch({
            type:'RESET',
            payload:[]
        })
    }

    return(<GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,AddTransaction,resetTransactions}}>
        {children}
    </GlobalContext.Provider>)
}