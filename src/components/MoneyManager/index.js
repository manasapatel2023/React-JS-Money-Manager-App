import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
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
    transactionList: [],
    titleInput: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  getIncome = () => {
    let incomeAmount = 0
    const {transactionList} = this.state
    transactionList.forEach(eachItem => {
      if (eachItem.optionId === transactionTypeOptions[0].optionId) {
        incomeAmount += eachItem.amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    let expensesAmount = 0
    const {transactionList} = this.state
    transactionList.forEach(eachItem => {
      if (eachItem.optionId === transactionTypeOptions[1].optionId) {
        expensesAmount += eachItem.amount
      }
    })
    return expensesAmount
  }

  getBalance = () => {
    let balanceAmount = 0
    const {transactionList} = this.state
    transactionList.forEach(eachItem => {
      if (eachItem.optionId === transactionTypeOptions[0].optionId) {
        balanceAmount += eachItem.amount
      } else {
        balanceAmount -= eachItem.amount
      }
    })
    return balanceAmount
  }

  addDetails = event => {
    event.preventDefault()
    const {titleInput, amount, optionId} = this.state
    const newTransaction = {
      titleInput,
      amount: parseInt(amount),
      optionId,
      id: uuidv4(),
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amount: '',
    }))
  }

  getType = event => {
    this.setState({titleInput: event.target.value})
  }

  getAmount = event => {
    this.setState({amount: event.target.value})
  }

  getTypeOfMoney = event => {
    this.setState({optionId: event.target.value})
  }

  deleteItem = id => {
    const {transactionList} = this.state
    const updateList = transactionList.filter(eachItem => id !== eachItem.id)
    this.setState({transactionList: updateList})
  }

  render() {
    const {transactionList, titleInput, amount} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div>
        <div>
          <div>
            <h1>Hi, Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <div>
            <MoneyDetails
              balanceAmount={balanceAmount}
              incomeAmount={incomeAmount}
              expensesAmount={expensesAmount}
            />
          </div>
        </div>
        <div>
          <div>
            <form onSubmit={this.addDetails}>
              <h1>Add Transaction</h1>
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                value={titleInput}
                placeholder="TITLE"
                onChange={this.getType}
                id="title"
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                id="amount"
                type="text"
                value={amount}
                placeholder="AMOUNT"
                onChange={this.getAmount}
              />
              <label htmlFor="selection">TYPE</label>
              <select id="selection" onChange={this.getTypeOfMoney}>
                <option value={transactionTypeOptions[0].optionId}>
                  {transactionTypeOptions[0].displayText}
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <button type="submit">Add</button>
            </form>
          </div>
          <div>
            <h1>History</h1>
            <ul>
              <li>
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </li>
              {transactionList.map(eachItem => (
                <TransactionItem
                  details={eachItem}
                  key={eachItem.id}
                  deleteTransaction={this.deleteItem}
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

// import {Component} from 'react'
// import {v4 as uuidv4} from 'uuid'
// import MoneyDetails from '../MoneyDetails'
// import TransactionItem from '../TransactionItem'
// import './index.css'

// const transactionTypeOptions = [
//   {
//     optionId: 'INCOME',
//     displayText: 'Income',
//   },
//   {
//     optionId: 'EXPENSES',
//     displayText: 'Expenses',
//   },
// ]

// // Write your code here
// class MoneyManager extends Component {
//   state = {
//     historyList: [],
//     title: '',
//     amount: '',
//     optionId: transactionTypeOptions[0].optionId,
//   }

//   getBalance = () => {
//     let balanceAmount = 0
//     const {historyList} = this.state
//     historyList.forEach(eachItem => {
//       if (eachItem.optionId === transactionTypeOptions[0].optionId) {
//         balanceAmount += eachItem.amount
//       } else {
//         balanceAmount -= eachItem.amount
//       }
//     })
//     return balanceAmount
//   }

//   getIncome = () => {
//     let incomeAmount = 0
//     const {historyList} = this.state
//     historyList.forEach(eachItem => {
//       if (eachItem.optionId === transactionTypeOptions[0].optionId) {
//         incomeAmount += eachItem.amount
//       }
//     })
//     return incomeAmount
//   }

//   getExpenses = () => {
//     let expensesAmount = 0
//     const {historyList} = this.state
//     historyList.forEach(eachItem => {
//       if (eachItem.optionId === transactionTypeOptions[0].optionId) {
//         expensesAmount -= eachItem.amount
//       }
//     })
//     return expensesAmount
//   }

//   addDetails = event => {
//     event.preventDefault()
//     const {title, amount, optionId} = this.state
//     const newTransaction = {
//       title,
//       amount: parseInt(amount),
//       optionId,
//       id: uuidv4(),
//     }
//     this.setState(prevState => ({
//       historyList: [...prevState.historyList, newTransaction],
//       title: '',
//       amount: '',
//     }))
//   }

//   getType = event => {
//     this.setState({title: event.target.value})
//   }

//   getAmount = event => {
//     this.setState({amount: event.target.value})
//   }

//   getTypeOfMoney = event => {
//     this.setState({optionId: event.target.value})
//   }

//   deleteItem = id => {
//     const {historyList} = this.state
//     const updateList = historyList.filter(eachItem => id !== eachItem.id)
//     this.setState({historyList: updateList})
//   }

//   render() {
//     const {historyList, title, amount} = this.state
//     const balanceAmount = this.getBalance()
//     const incomeAmount = this.getIncome()
//     const expensesAmount = this.getExpenses()

//     return (
//       <div className="bg-container">
//         <div className="container">
//           <div className="card-1-container">
//             <h1 className="heading">Hi, Richard</h1>
//             <p className="description">
//               Welcome back to your
//               <span className="des-color"> Money Manager</span>
//             </p>
//           </div>
//           <div className="money-details-container">
//             <MoneyDetails
//               balanceAmount={balanceAmount}
//               incomeAmount={incomeAmount}
//               expensesAmount={expensesAmount}
//             />
//           </div>
//         </div>
//         <div className="transaction-container">
//           <div className="form-container">
//             <form className="form" onSubmit={this.addDetails}>
//               <h1 className="transaction-heading">Add Transaction</h1>
//               <label className="label" htmlFor="title">
//                 TITLE
//               </label>
//               <input
//                 type="text"
//                 className="input"
//                 placeholder="TITLE"
//                 id="title"
//                 onChange={this.getType}
//                 value={title}
//               />
//               <label className="label" htmlFor="amount">
//                 AMOUNT
//               </label>
//               <input
//                 type="text"
//                 className="input"
//                 placeholder="AMOUNT"
//                 id="amount"
//                 onChange={this.getAmount}
//                 value={amount}
//               />
//               <label className="label" htmlFor="selection">
//                 TYPE
//               </label>
//               <select
//                 id="selection"
//                 onChange={this.getTypeOfMoney}
//                 className="select"
//               >
//                 <option
//                   className="option"
//                   value={transactionTypeOptions[0].optionId}
//                 >
//                   {transactionTypeOptions[0].displayText}
//                 </option>
//                 <option
//                   className="option"
//                   value={transactionTypeOptions[1].optionId}
//                 >
//                   {transactionTypeOptions[1].displayText}
//                 </option>
//               </select>
//               <button className="button" type="submit">
//                 Add
//               </button>
//             </form>
//           </div>
//           <div className="history-container">
//             <h1 className="history-heading">History</h1>
//             <ul className="unordered-list">
//               <li className="list-container">
//                 <p className="title">Title</p>
//                 <p className="amount-size">Amount</p>
//                 <p className="type">Type</p>
//               </li>
//               {historyList.map(eachItem => (
//                 <TransactionItem
//                   details={eachItem}
//                   key={eachItem.id}
//                   deleteTransaction={this.deleteItem}
//                 />
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default MoneyManager
