import transactions from "./transactions.json"
import "./TransactionHistory.css"

export const TransactionHistory = (items) => {
    return (
        <table className="transaction-history">
  <thead>
    <tr className="titleTab">
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
            </thead>
            <tbody className="itemTab">
                {transactions.map(transaction => {
                    return (
         <tr key={transaction.id}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
    )
})}
 
  </tbody>
</table>
    )
}