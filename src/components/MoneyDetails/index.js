import './index.css'

// Write your code here

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <ul className="unordered-list-cont">
      <li className="list-container bg-color1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <p className="paragraph1">Your Balance</p>
        <p className="amount" data-testid="balanceAmount">
          Rs {balanceAmount}
        </p>
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <p className="paragraph1">Your Income</p>
        <p className="amount" data-testid="incomeAmount">
          Rs {incomeAmount}
        </p>
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <p className="paragraph1">Your Expenses</p>
        <p className="amount" data-testid="expensesAmount">
          Rs {expensesAmount}
        </p>
      </li>
    </ul>
  )
}

export default MoneyDetails

// import './index.css'

// const MoneyDetails = props => {
//   const {balanceAmount, incomeAmount, expensesAmount} = props
//   return (
//     <ul className="unordered-list-cont">
//       <li className="list-container bg-color1">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
//           alt="balance"
//           className="image"
//         />
//         <div>
//           <p className="paragraph1">Your Balance</p>
//           <p className="amount">Rs {balanceAmount}</p>
//         </div>
//       </li>

//       <li className="list-container bg-color2">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
//           alt="income"
//           className="image"
//         />
//         <div>
//           <p className="paragraph1">Your Income</p>
//           <p className="amount">Rs {incomeAmount}</p>
//         </div>
//       </li>

//       <li className="list-container bg-color3">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
//           alt="expenses"
//           className="image"
//         />
//         <div>
//           <p className="paragraph1">Your Expenses</p>
//           <p className="amount">Rs {expensesAmount}</p>
//         </div>
//       </li>
//     </ul>
//   )
// }

// export default MoneyDetails
