export class Money {
  private quantity: number
  constructor(quantity = 0) {
    this.quantity = quantity
  }

  static add({ quantity: aQuantity }: Money, { quantity: bQuantity }: Money) {
    return new Money(aQuantity + bQuantity)
  }

  static subtract(
    { quantity: aQuantity }: Money,
    { quantity: bQuantity }: Money
  ) {
    return new Money(aQuantity - bQuantity)
  }

  toString() {
    const { quantity } = this
    return quantity.toFixed(2)
  }
}
