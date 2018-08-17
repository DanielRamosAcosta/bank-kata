import { Transaction, PrintFn } from './Transaction'
import { Money } from '../Money'

export class DepositTransaction extends Transaction {
  exectute(money: Money) {
    const add = Money.add
    return add(money, this.money)
  }

  format(fn: PrintFn) {
    return fn({
      date: this.dateToString(),
      credit: this.moneyToString(),
      debit: ''
    })
  }
}
