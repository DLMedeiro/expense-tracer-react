import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/globalState'

export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext)

    function onSubmit(e) {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            // text: text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }
  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />

            {/* Connect the state to input by adding value={text}.  Need onChange event to update state when the input is changed.  onChange - call a function to setText and pass in the value to set it to which is the value being typed in, which can be taken from the event parameter(e) e.target.value = whatever is being typed in */}


            </div>
            <div className="form-control">
                <label htmlFor="amount">
                    Amount
                    <br/>
                    (negative - expense, positive - income)
                </label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </>)
}
