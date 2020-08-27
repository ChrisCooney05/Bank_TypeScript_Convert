class Transaction {
  constructor(date, credit, debit, balance) {
    this.#date = date;
    this.#credit = credit;
    this.#debit = debit;
    this.#balance = balance;
  }
  #date;
  #credit;
  #debit;
  #balance;
  toString() {
    let date = this.#date;
    let credit = this.#credit;
    let debit = this.#debit;
    let balance = this.#balance;
    return `${date} || ${credit} || ${debit} || ${balance}`;
  }
}

module.exports = Transaction;
