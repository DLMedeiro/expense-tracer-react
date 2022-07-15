// Specify the application state changes in resposne to app changes to the context

// DELETE_TRANSACTION comes from action.type. id comes from payload
export default (state, action) => {
    switch(action.type) {
        case 'ADD_TRANSACTION' :
            return{
                ...state, 
                transactions: [action.payload, ...state.transactions]
            }
        case 'DELETE_TRANSACTION' :
            return{
                // create a new state and send it down
                ...state, 
                transactions: state.transactions.filter(transaction => transaction.id != action.payload)
                // Send transactions except the one deleted
            }
        default:
            return state;
    }
}