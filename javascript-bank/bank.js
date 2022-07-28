/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  // if ((balance > 0) && (Number.isInteger(balance)) && (balance !== undefined)) {
  //   this.nextAccountNumber += 1;
  //   var newAccount = new Account(this.nextAccountNumber, holder);
  //   newAccount.deposit(balance);
  //   this.accounts.push(newAccount);
  //   return newAccount.number - 1;
  // } else {
  //   return null;
  // }
  if ((balance <= 0) || (!Number.isInteger(balance))) {
    return null;
  } else {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  }
};

Bank.prototype.getAccount = function (number) {
  // debugger;
  // for (var i = 0; i < this.accounts.length; i++) {
  //   if (this.accounts[i].number === number) {
  //     var gotAccount = this.accounts[i];
  //     return gotAccount;
  //   }
  // }
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      var gotAccount = this.accounts[i];
      return gotAccount;
    }
  } return null;
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  } else {
    var totalAssets = 0;
    for (var i = 0; i < this.accounts.length; i++) {
      for (var j = 0; j < this.accounts[i].transactions.length; j++) {
        if (this.accounts[i].transactions[j].type === 'deposit') {
          totalAssets += this.accounts[i].transactions[j].amount;
        } if (this.accounts[i].transactions[j].type === 'withdrawal') {
          totalAssets -= this.accounts[i].transactions[j].amount;
        }
      }
    } return totalAssets;
  }
};
