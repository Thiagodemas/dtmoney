import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transition {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string,
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext<Transition[]>([]);

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [ transactions, setTransaction] = useState<Transition[]>([]);

    useEffect(() =>{
        api.get('transaction')
            .then(response => setTransaction(response.data.transactions))
    }, [])

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )
}