export default class Transaction {
  #date: string;
  #credit: string;
  #debit: string;
  #balance: string;
  constructor(date: string, credit: string, debit: string, balance: string) {
    this.#date = date;
    this.#credit = credit;
    this.#debit = debit;
    this.#balance = balance;
  }

  toString(): string {
    let date = this.#date;
    let credit = this.#credit;
    let debit = this.#debit;
    let balance = this.#balance;
    return `${date} || ${credit} || ${debit} || ${balance}`;
  }
}
