main();

function main() {
  const transactions = [
    {
      id: 't1',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '23.99',
    },
    {
      id: 't2',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'PAYPAL',
      amount: '100.43',
    },
    {
      id: 't3',
      type: 'REFUND',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '10.99',
    },
    {
      id: 't4',
      type: 'PAYMENT',
      status: 'CLOSED',
      method: 'PLAN',
      amount: '15.99',
    },
  ];

  processTransactions(transactions);
}

function processTransactions(transactions) {
    if (transactions.length !=0) {
      processPayment(transactions)
    }
    else {
        console.log('No transactions provided!');
      }
}

function processPayment(transactions){
  for (const transaction of transactions){
      if (transaction.status ==='OPEN' ) {
        payMent (transaction)
      }
      else if (transaction.status ==='CLOSED'){
        console.log('Invalid transaction type!', transaction)
      }   
    }
}

function payMent (transaction){
    const methodWithoutUnderscores = transaction.method.replace(/_/g, ' ')
    console.log(`Processing ${methodWithoutUnderscores.toLowerCase()} ${transaction.type.toLowerCase()} for amont :` + transaction.amount)
    return}
  
function reFound(transaction){
  if (transaction.type === 'REFOUND' && transaction.status ==='OPEN'){
    console.log(`Processing plan for refound for amont :` + transaction.amount)
    return
  }
}


