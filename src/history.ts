import Transaction from "./transaction";

export default class History {
  _transactions: Transaction[];
  _STATEMENT_HEADER: string;
  constructor() {
    this._transactions = [];
    this._STATEMENT_HEADER = "date || credit || debit || balance";
  }

  deposit(date: string, funds: number, balance: number): void {
    let fundsFloat = this._formatInteger(funds);
    let balanceFloat = this._formatInteger(balance);
    this._makeTransactionInstance(date, fundsFloat, "", balanceFloat);
  }

  withdraw(date: string, funds: number, balance: number): void {
    let fundsFloat = this._formatInteger(funds);
    let balanceFloat = this._formatInteger(balance);
    this._makeTransactionInstance(date, "", fundsFloat, balanceFloat);
  }

  _formatInteger(integer: number): string {
    return integer.toFixed(2);
  }

  _makeTransactionInstance(
    date: string,
    credit: string,
    debit: string,
    balance: string
  ): void {
    let singleTransaction = new Transaction(date, credit, debit, balance);
    this._transactions.push(singleTransaction);
  }

  _pushStatementToArray(): string[] {
    let fullHistory = this._transactions.reverse();
    return fullHistory.map(t => {
      let transaction = t.toString();
      return `\n${transaction}`;
    });
  }

  logStatement(): void {
    let result = this._pushStatementToArray();
    let formattedResult = result.join("");
    console.log(`${this._STATEMENT_HEADER}${formattedResult}`);
  }
}
