export class TransactionDate {
  private date: Date
  constructor(date: Date) {
    this.date = date
  }

  static atDate(day: number, month: number, year: number) {
    return new TransactionDate(new Date(year, month - 1, day))
  }

  static now() {
    return new TransactionDate(new Date())
  }

  static comparator(
    { date: aDate }: TransactionDate,
    { date: bDate }: TransactionDate
  ) {
    const aTimeMs = aDate.getTime()
    const bTimeMs = bDate.getTime()
    return aTimeMs - bTimeMs
  }

  private formatDay() {
    const date = this.date
    const dayNumber = date.getDate()
    return `${dayNumber}`.padStart(2, '0')
  }

  private formatMonth() {
    const date = this.date
    const monthNumberIndexedAtOne = date.getMonth() + 1
    return `${monthNumberIndexedAtOne}`.padStart(2, '0')
  }

  private formatYear() {
    const date = this.date
    return date.getFullYear()
  }

  public toString() {
    const day = this.formatDay()
    const month = this.formatMonth()
    const year = this.formatYear()

    return `${day}/${month}/${year}`
  }
}
