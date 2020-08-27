const History = require("./history");
class Bank {
  //#history will be a : typeof History when added
  constructor(balance, history) {
    this.#balance = 0;
    this.#history = new History();
  }
  #balance;
  #history;
  //#currentBalance would be preferred but as of yet there is no support in TS for private methods
  _currentBalance() {
    return this.#balance;
  }
  deposit(funds) {
    this.#balance += funds;
    let date = this._getDate();
    let balance = this._currentBalance();
    this.#history.deposit(date, funds, balance);
  }
  withdraw(funds) {
    this.#balance -= funds;
    let date = this._getDate();
    let balance = this._currentBalance();
    this.#history.withdraw(date, funds, balance);
  }
  statement() {
    this.#history.logStatement();
  }
  _getDate() {
    let t = new Date();
    let dd = t.getDate();
    let mm = t.getMonth() + 1;
    let yyyy = t.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  }
}
