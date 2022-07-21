import React from 'react'

export default function TotalTransation({ transactions }) {
    let total = 0;
    
    if(transactions) {
        transactions.map(transaction => {
            return total += parseFloat(transaction.amount);
         })
    }
    
  return (
    <h3>Total gasto: {total}</h3>
  )
}
