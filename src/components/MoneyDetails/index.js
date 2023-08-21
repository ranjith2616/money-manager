import './index.css'

const MoneyDetails = props => {
  const {totalBalance, totalIncome, totalExpenses} = props

  return (
    <div className="money-details-container">
      <div className="details-card balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="img"
        />
        <div className="text-card">
          <p> Your Balance</p>
          <p data-testid="balanceAmount"> Rs {totalBalance}</p>
        </div>
      </div>
      <div className="details-card income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img"
        />
        <div className="text-card">
          <p> Your Income</p>
          <p data-testid="incomeAmount"> Rs {totalIncome}</p>
        </div>
      </div>
      <div className="details-card expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="img"
        />
        <div className="text-card">
          <p> Your Expenses</p>
          <p data-testid="expensesAmount"> Rs {totalExpenses} </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
