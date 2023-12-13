// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {balance, income, expenses} = moneyDetails

  return (
    <>
      <li className="base-model green-model">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image-size"
        />
        <div>
          <p className="balance-para">Your Balance</p>
          <p data-testid="balanceAmount" className="amount-para">
            Rs {balance}
          </p>
        </div>
      </li>
      <li className="base-model blue-model">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image-size"
        />
        <div>
          <p className="balance-para">Your Income</p>
          <p data-testid="incomeAmount" className="amount-para">
            Rs {income}
          </p>
        </div>
      </li>
      <li className="base-model purple-model">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image-size"
        />
        <div>
          <p className="balance-para">Your Expenses</p>
          <p data-testid="expensesAmount" className="amount-para">
            Rs {expenses}
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
