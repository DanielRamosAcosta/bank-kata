import { Person } from '../src/Person'
import { Bank } from '../src/Bank'
import { Money } from '../src/Money'
import { TransactionDate } from '../src/Transaction/TransactionDate'

describe('The exercise', () => {
  it('works', () => {
    const alice = new Person({ name: 'Alice' })
    const bbva = new Bank({ name: 'BBVA' })

    const aliceAccount = bbva.openAccount(alice)

    bbva.deposit(
      aliceAccount,
      new Money(1000),
      TransactionDate.atDate(10, 1, 2012)
    )
    bbva.deposit(
      aliceAccount,
      new Money(2000),
      TransactionDate.atDate(13, 1, 2012)
    )
    bbva.withdraw(
      aliceAccount,
      new Money(500),
      TransactionDate.atDate(14, 1, 2012)
    )

    expect(bbva.statement(aliceAccount)).toEqual(unIndent`
      date || credit || debit || balance
      14/01/2012 ||  || 500.00 || 2500.00
      13/01/2012 || 2000.00 ||  || 3000.00
      10/01/2012 || 1000.00 ||  || 1000.00
    `)
  })
})

//#region utility
function unIndent(tsa: TemplateStringsArray) {
  const firstString = tsa[0]

  return firstString
    .split('\n')
    .map(e => e.trim())
    .filter(e => !!e)
    .join('\n')
}
//#endregion
