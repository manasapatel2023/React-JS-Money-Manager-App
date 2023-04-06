import './index.css'

const TransactionItem = props => {
  const {details, deleteTransaction} = props
  const {id, optionId, titleInput, amount} = details
  const onDelete = () => {
    deleteTransaction(id)
  }

  return (
    <>
      <li className="transaction-container" key={id}>
        <p className="trans-title">{titleInput}</p>
        <p className="trans-amount">{amount}</p>
        <p className="trans-option">{optionId}</p>
        <button type="button" onClick={onDelete} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </li>
    </>
  )
}

export default TransactionItem

// // Write your code here
// import './index.css'

// const TransactionItem = props => {
//   const {details, deleteTransaction} = props
//   const {id, optionId, title, amount} = details

//   const onDelete = () => {
//     deleteTransaction(id)
//   }
//   return (
//     <>
//       <li className="transaction-container" key={id}>
//         <p className="trans-title">{title}</p>
//         <p className="trans-amount">{amount}</p>
//         <p className="trans-option">{optionId}</p>
//         <button type="button" className="delete-btn" onClick={onDelete}>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
//             alt="delete"
//             className="delete-icon"
//           />
//         </button>
//       </li>
//     </>
//   )
// }

// export default TransactionItem
