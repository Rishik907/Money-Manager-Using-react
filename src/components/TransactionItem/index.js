// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transaction, onDeleteTransaction} = props
  const {title, amount, type} = transaction

  const onDeleteTrans = () => {
    onDeleteTransaction(transaction)
  }

  return (
    <li>
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <button
        type="button"
        onClick={onDeleteTrans}
        className="button-val-check"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="img-size"
        />
      </button>
    </li>
  )
}

export default TransactionItem
