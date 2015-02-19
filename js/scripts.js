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

  $('#create_account').submit(function(event) {
    event.preventDefault();

    var nameInput = $('#name').val();
    var initial_depositInput = parseFloat($('#initial_deposit').val());
    if (isNaN(initial_depositInput)) { initial_depositInput = 0; }

    newAccount.name = nameInput;
    newAccount.deposit(initial_depositInput);

    $('.name').text(newAccount.name);
    $('.balance').text(newAccount.balance.toFixed(2));
    $('#initial_deposit').val("");
    $('#create').toggle("slide", 325).dequeue().fadeOut(325);
    $('#manage').toggle("slide", 325).dequeue().hide().fadeIn(500);
  });

  $('#account_management').submit(function() {
    event.preventDefault();

    var depositInput = parseFloat($('#deposit').val());
    var withdrawInput = parseFloat($('#withdraw').val());
    if (isNaN(depositInput)) { depositInput = 0; }
    if (isNaN(withdrawInput)) { withdrawInput = 0; }

    var currentBalance = newAccount.balance;
    var balanceColor = "";

    newAccount.deposit(depositInput);
    newAccount.withdraw(withdrawInput);

    if (currentBalance <= newAccount.balance) {
      balanceColor = "#45a742";
    } else {
      balanceColor = "red";
    }

    $('.balance').text(newAccount.balance.toFixed(2));
    $('.balance').animate({ color: balanceColor }, 62.5 );
    $('.balance').animate({ color: "black" }, 825 );
    $('#deposit').val("");
    $('#withdraw').val("");
  });
});
