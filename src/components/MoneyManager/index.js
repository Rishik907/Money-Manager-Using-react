import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

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

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    balance: 0,
    income: 0,
    expenses: 0,
    transactionsList: [],
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: +event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onDeleteTransaction = transaction => {
    const {id, amount, type} = transaction
    console.log(transaction)
    // const findTransaction = transactionsList.filter(
    //   transaction => transaction.id === id,
    // )
    // console.log('find', findTransaction)
    // const {amount, type} = {...findTransaction}
    // console.log(amount, type)

    this.setState(prevState =>
      type === 'INCOME'
        ? {
            balance: prevState.balance - amount,
            income: prevState.income - amount,
            transactionsList: prevState.transactionsList.filter(
              transactionList => transactionList.id !== id,
            ),
          }
        : {
            balance: prevState.balance + amount,
            expenses: prevState.expenses - amount,
            transactionsList: prevState.transactionsList.filter(
              transactionList => transactionList.id !== id,
            ),
          },
    )
  }

  onAddToTables = event => {
    event.preventDefault()
    const {title, amount, type, transactionsList} = this.state
    const newTransaction = {id: v4(), title, amount, type}
    const amountNumber = +amount
    const newTransactionsList = [...transactionsList, newTransaction]

    this.setState(prevState =>
      type === 'INCOME'
        ? {
            balance: prevState.balance + amountNumber,
            income: prevState.income + amountNumber,
            transactionsList: newTransactionsList,
            title: '',
            amount: '',
            type: transactionTypeOptions[0].optionId,
          }
        : {
            expenses: prevState.expenses + amountNumber,
            balance: prevState.balance - amountNumber,
            transactionsList: newTransactionsList,
            title: '',
            amount: '',
            type: transactionTypeOptions[0].optionId,
          },
    )
  }

  render() {
    const {
      title,
      amount,
      type,
      balance,
      income,
      expenses,
      transactionsList,
    } = this.state
    const moneyDetails = {balance, income, expenses}

    return (
      <div className="bg-container">
        <div className="bg-heading-container">
          <h1>Hi,Richard</h1>
          <p className="para">
            Welcome back to your{' '}
            <span className="span-para">Money Manager</span>
          </p>
        </div>
        <ul className="list-of-money">
          <MoneyDetails moneyDetails={moneyDetails} />
        </ul>
        <div className="input-element-container">
          <div className="container-of-input">
            <h1>Add Transaction</h1>
            <form className="form-input-elements">
              <label htmlFor="title">TITLE</label>
              <input
                className="input-element"
                type="text"
                placeholder="TITLE"
                id="title"
                value={title}
                onChange={this.onChangeTitle}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                className="input-element"
                type="text"
                placeholder="AMOUNT"
                id="amount"
                value={amount}
                onChange={this.onChangeAmount}
              />
              <label htmlFor="type">TYPE</label>
              <select
                className="input-element"
                onChange={this.onChangeType}
                value={type}
              >
                {transactionTypeOptions.map(optionType => (
                  <option key={optionType.optionId} value={optionType.optionId}>
                    {optionType.displayText}
                  </option>
                ))}
              </select>
              <button
                onClick={this.onAddToTables}
                type="submit"
                className="button-val"
              >
                Add
              </button>
            </form>
          </div>
          <div className="container-of-input2">
            <h1>History</h1>
            <ul>
              <li>
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p>{}</p>
              </li>
              {transactionsList.map(transaction => (
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
