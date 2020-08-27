import History from "./history";

class Bank {
  #balance: number;
  #history: History;
  //#history will be a : typeof History when added
  constructor(balance: number, history: typeof History) {
    this.#balance = 0;
    this.#history = new History();
  }
  //#currentBalance would be preferred but as of yet there is no support in TS for private methods
  _currentBalance(): number {
    return this.#balance;
  }

  deposit(funds: number): void {
    this.#balance += funds;
    let date = this._getDate();
    let balance = this._currentBalance();
    this.#history.deposit(date, funds, balance);
  }

  withdraw(funds: number): void {
    this.#balance -= funds;
    let date = this._getDate();
    let balance = this._currentBalance();
    this.#history.withdraw(date, funds, balance);
  }

  statement(): void {
    this.#history.logStatement();
  }

  _getDate(): string {
    let t = new Date();
    let dd = t.getDate();
    let mm = t.getMonth() + 1;
    let yyyy = t.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  }
}
