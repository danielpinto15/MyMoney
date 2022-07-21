import React, { useEffect, useState } from 'react'
import { useFireStore } from '../../hooks/useFirestore';

export default function TransactionForm({ uid }) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const { addDocument, response } = useFireStore('transactions');

    const handleSubmit = (e) => {
        e.preventDefault();
        addDocument({
            uid,
            name,
            amount
        })
    }

    useEffect(() => {
        if (response.success) {
            setName('')
            setAmount('')
        }
    }, [response.success])

  return (
    <>
        <h3>Adicionar despesa</h3>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input 
                type='text'
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
            </label>
            <label>
                <span>Preço(€):</span>
                <input 
                type='number'
                required
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                />
            </label>
            <button>Adicionar</button>
        </form>
    </>
  )
}
