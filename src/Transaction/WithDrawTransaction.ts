import { Transaction, PrintFn } from './Transaction'
import { Money } from '../Money'

export class WithDrawTransaction extends Transaction {
  exectute(money: Money) {
    const subtract = Money.subtract
    return subtract(money, this.money)
  }

  format(fn: PrintFn) {
    return fn({
      date: this.dateToString(),
      credit: '',
      debit: this.moneyToString()
    })
  }
}
