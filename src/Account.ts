import { Person } from './Person'
import { Money } from './Money'
import { Transaction } from './Transaction/Transaction'
import { DepositTransaction } from './Transaction/DepositTransaction'
import { WithDrawTransaction } from './Transaction/WithDrawTransaction'
import { TransactionDate } from './Transaction/TransactionDate'

export class Account {
  private owner: Person
  private transactions: Transaction[]

  constructor(owner: Person) {
    this.owner = owner
    this.transactions = []
  }

  public deposit(money: Money, date: TransactionDate) {
    const transaction = new DepositTransaction(money, date)
    const { transactions } = this
    transactions.push(transaction)
  }

  public withdraw(money: Money, date: TransactionDate) {
    const transaction = new WithDrawTransaction(money, date)
    const { transactions } = this
    transactions.push(transaction)
  }

  private static formatTransaction({
    date,
    credit,
    debit
  }: {
    date: string
    credit: string
    debit: string
  }) {
    return `${date} || ${credit} || ${debit}`
  }

  public statement() {
    let balance = new Money()
    let statementRows: string[] = []
    const { formatTransaction } = Account

    for (const transaction of this.transactions) {
      balance = transaction.exectute(balance)
      const row = `${transaction.format(formatTransaction)} || ${balance}`
      statementRows.push(row)
    }

    statementRows = statementRows.reverse()

    return ['date || credit || debit || balance']
      .concat(statementRows)
      .join('\n')
  }
}
