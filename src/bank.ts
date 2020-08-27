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
    let date = this.#getDate();
    let balance = this._currentBalance();
    this.#history.deposit(date, funds, balance);
  }
}
