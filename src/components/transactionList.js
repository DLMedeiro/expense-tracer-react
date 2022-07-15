import React, {useContext} from 'react'
import { GlobalContext } from '../context/globalState'
import { Transaction } from './transaction'

export const TransactionList = () => {
    // use useContext to pull in additional information to use
    const {transactions} = useContext(GlobalContext)
    // const context = useContext(GlobalContext)

  return (
    <>
        <h3>History</h3>
        <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction = {transaction}/>))}
            {/* {transaction} = the beginning of map transaction so it knows which transaction to render */}
            {/* bringing in transaction through global context, mapping through, for each transaction render a transaction component and pass in a transaction prop */}
            {/* above creates the list and requires a unique key*/}

        </ul>
    </>
    )
}
