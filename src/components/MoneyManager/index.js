import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    textInput: '',
    amountInput: '',
    type: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  onAddButton = event => {
    event.preventDefault()

    const {textInput, amountInput, type} = this.state
    const typeOfTrasanction = transactionTypeOptions.find(
      eachTran => eachTran.optionId === type,
    )
    const {displayText} = typeOfTrasanction
    const newTransaction = {
      id: uuidv4(),
      text: textInput,
      amount: parseInt(amountInput),
      transactionType: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      textInput: '',
      amountInput: '',
      type: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTypeInput = event => {
    this.setState({type: event.target.value})
  }

  getBalance = () => {
    const {transactionList} = this.state

    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (
        eachTransaction.transactionType ===
        transactionTypeOptions[0].displayText
      ) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  getIncome = () => {
    const {transactionList} = this.state

    let incomeAmount = 0

    transactionList.forEach(eachTransaction => {
      if (
        eachTransaction.transactionType ===
        transactionTypeOptions[0].displayText
      ) {
        incomeAmount += eachTransaction.amount
      }
    })

    return incomeAmount
  }

  getExpenses = () => {
    const {transactionList} = this.state

    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (
        eachTransaction.transactionType ===
        transactionTypeOptions[1].displayText
      ) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  onDeleteButton = id => {
    const {transactionList} = this.state

    const updatedList = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({transactionList: updatedList})
  }

  render() {
    const {textInput, amountInput, type, transactionList} = this.state

    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="responsive-container">
        <div className="top-header-container">
          <h1 className="name"> Hi, Ranjith</h1>
          <p className="name">
            {' '}
            Welcome back to your{' '}
            <span className="special-text"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          totalBalance={balanceAmount}
          totalIncome={incomeAmount}
          totalExpenses={expensesAmount}
        />
        <div className="bottom-container">
          <form className="form-container" onSubmit={this.onAddButton}>
            <h1 className="bottom-cards-heading"> Add Transaction</h1>

            <label htmlFor="title" className="label">
              {' '}
              TITLE
            </label>
            <input
              type="text"
              id="title"
              value={textInput}
              className="input"
              placeholder="TITLE"
              onChange={this.onChangeTextInput}
            />

            <label htmlFor="amount" className="label">
              {' '}
              AMOUNT
            </label>
            <input
              type="text"
              id="amount"
              value={amountInput}
              className="input"
              placeholder="AMOUNT"
              onChange={this.onChangeAmountInput}
            />
            <label htmlFor="type" className="label">
              {' '}
              TYPE
            </label>
            <select
              id="type"
              className="input"
              value={type}
              onChange={this.onChangeTypeInput}
            >
              {transactionTypeOptions.map(eachType => (
                <option value={eachType.optionId} key={eachType.optionId}>
                  {' '}
                  {eachType.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="add-button">
              {' '}
              Add
            </button>
          </form>

          <ul className="history-container">
            <h1 className="bottom-cards-heading"> History</h1>
            <li className="table-heading">
              <p className="title"> Title</p>
              <p className="title"> Amount</p>
              <p className="title"> Type</p>
              <p className="ntg"> TYpe</p>
            </li>
            {transactionList.map(eachTransaction => (
              <TransactionItem
                key={eachTransaction.id}
                transactionDetails={eachTransaction}
                onDeleteButton={this.onDeleteButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
