import { Money } from '../Money'
import { TransactionDate } from './TransactionDate'

export type PrintFn = (
  data: { date: string; credit: string; debit: string }
) => string

export abstract class Transaction {
  protected money: Money
  protected date: TransactionDate

  constructor(money: Money, date = TransactionDate.now()) {
    this.money = money
    this.date = date
  }

  protected dateToString() {
    return `${this.date}`
  }

  protected moneyToString() {
    return `${this.money}`
  }

  static transactionComparator(
    { date: aDate }: Transaction,
    { date: bDate }: Transaction
  ) {
    return TransactionDate.comparator(aDate, bDate)
  }

  abstract format(fn: PrintFn): string
  abstract exectute(money: Money): Money
}
