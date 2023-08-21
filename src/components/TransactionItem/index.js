import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteButton} = props
  const {text, amount, transactionType, id} = transactionDetails

  const deleteBtn = () => {
    onDeleteButton(id)
  }

  return (
    <li className="transaction-table">
      <p className="output"> {text}</p>
      <p className="output"> {amount}</p>
      <p className="output"> {transactionType}</p>

      <div className="delete-card">
        <button
          type="button"
          className="delete-button output"
          data-testid="delete"
          onClick={deleteBtn}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
