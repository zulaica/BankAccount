var BankAccount = {
  balance: 0,
  deposit: function(amount) {
    this.balance += amount;
  },
  withdraw: function(amount) {
    this.balance -= amount;
  }
};

$(document).ready(function(){
  var newAccount = Object.create(BankAccount);

  $('form#create_account').submit(function(event) {
    event.preventDefault();

    var nameInput = $('input#name').val();
    var initial_depositInput = parseFloat($('input#initial_deposit').val());
    isNaN(initial_depositInput) ? initial_depositInput = 0 : initial_depositInput = initial_depositInput;


    newAccount.name = nameInput;
    newAccount.deposit(initial_depositInput);

    $('.name').text(newAccount.name);
    $('.balance').text(newAccount.balance.toFixed(2));
    $('#initial_deposit').val("");
    $('#create').toggle("slide", 325).dequeue().fadeOut(325);
    $('#manage').toggle("slide", 325).dequeue().hide().fadeIn(500);
  });

  $('form#account_management').submit(function() {
    event.preventDefault();

    var depositInput = parseFloat($('input#deposit').val());
    var withdrawInput = parseFloat($('input#withdraw').val());
    isNaN(depositInput) ? depositInput = 0 : depositInput = depositInput;
    isNaN(withdrawInput) ? withdrawInput = 0 : withdrawInput = withdrawInput;

    var currentBalance = newAccount.balance;

    newAccount.deposit(depositInput);
    newAccount.withdraw(withdrawInput);

    if (currentBalance < newAccount.balance) {
      var balanceColor = "#45a742";
    } else {
      var balanceColor = "red";
    }

    $('.balance').text(newAccount.balance.toFixed(2));
    $('.balance').animate({
      color: balanceColor,
    }, 62.5 );
    $('.balance').animate({
      color: "black",
    }, 825 );
    $('#deposit').val("");
    $('#withdraw').val("");
  });
});
