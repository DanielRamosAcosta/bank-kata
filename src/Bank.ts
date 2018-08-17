import { Person } from './Person'
import { Account } from './Account'
import { Money } from './Money'
import { TransactionDate } from './Transaction/TransactionDate'

export class Bank {
  private name: string
  constructor({ name }: { name: string }) {
    this.name = name
  }

  openAccount(person: Person) {
    return new Account(person)
  }

  deposit(account: Account, quantity: Money, date = TransactionDate.now()) {
    account.deposit(quantity, date)
  }

  withdraw(account: Account, quantity: Money, date = TransactionDate.now()) {
    account.withdraw(quantity, date)
  }

  statement(account: Account): string {
    return account.statement()
  }
}
