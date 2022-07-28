/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if ((amount > 0) && (amount !== '') && (!Number.isNaN(amount)) && (Number.isInteger(amount))) {
    var amountDeposit = new Transaction('deposit', amount);
    this.transactions.push(amountDeposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if ((amount > 0) && (amount !== '') && (!Number.isNaN(amount)) && (Number.isInteger(amount))) {
    var amountWithdraw = new Transaction('withdrawal', amount);
    this.transactions.push(amountWithdraw);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  } else if (this.transactions.length > 0) {
    var newBalance = 0;
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        newBalance += this.transactions[i].amount;
      } if (this.transactions[i].type === 'withdrawal') {
        newBalance -= this.transactions[i].amount;
      }
    }
    return newBalance;
  }
}
;
