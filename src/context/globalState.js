import React, {createContext, useReducer} from "react";
import AppReducer from "./appReducer";

// Initial State
    // Any global state would go on this object, but for this app only transactions are needed.
    // Only need access to transactions in certain components in order to do calculations within the component.  Don't need information in state just need to pass the data down
const initialState = {
    transactions: []
    // transactions: [
    //     { id: 1, text: 'Flower', amount: -20 },
    //     { id: 2, text: 'Salary', amount: 300 },
    //     { id: 3, text: 'Book', amount: -10 },
    //     { id: 4, text: 'Camera', amount: 150 }
    // ]
}


// Create Context
// Create global context using the "createContext" which was brought in
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    // Need to use dispatch when using a reducer
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions that will make calls to the reducer
    // dispatch goes into reducer providing a type and payload
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        }) 
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        }) 
    }

    return (
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
            {/* Transactions and current state can be accessed from all compoentns requested from using UseContract  */}
            {children}
                {/* Children becomes all components wrapped in app.js
                
                Provider with provide state and actions to the compoents werapped in the statement
                
                */}
        </GlobalContext.Provider>);
}