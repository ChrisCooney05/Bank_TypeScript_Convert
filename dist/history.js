const Transaction = require("./transaction");
class History {
  constructor() {
    this._transactions = [];
    this._STATEMENT_HEADER = "date || credit || debit || balance";
  }
  deposit(date, funds, balance) {
    let fundsFloat = this._formatInteger(funds);
    let balanceFloat = this._formatInteger(balance);
    this._makeTransactionInstance(date, fundsFloat, "", balanceFloat);
  }
  withdraw(date, funds, balance) {
    let fundsFloat = this._formatInteger(funds);
    let balanceFloat = this._formatInteger(balance);
    this._makeTransactionInstance(date, "", fundsFloat, balanceFloat);
  }
  _formatInteger(integer) {
    return integer.toFixed(2);
  }
  _makeTransactionInstance(date, credit, debit, balance) {
    let singleTransaction = new Transaction(date, credit, debit, balance);
    this._transactions.push(singleTransaction);
  }
  _pushStatementToArray() {
    let fullHistory = this._transactions.reverse();
    return fullHistory.map(t => {
      let transaction = t.toString();
      return `\n${transaction}`;
    });
  }
  logStatement() {
    let result = this._pushStatementToArray();
    let formattedResult = result.join("");
    console.log(`${this._STATEMENT_HEADER}${formattedResult}`);
  }
}

module.exports = History;
