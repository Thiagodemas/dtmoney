import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de Website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2022-01-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 2000,
          createdAt: new Date('2022-03-10 08:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transaction', () => {
      return this.schema.all('transaction')
    })

    this.post('/transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      
      return schema.create('transaction', data );
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);