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
    $('#initial_deposit').val(0);
    $('#create').hide();
    $('#manage').show();
    $('#results').show();

  });

  $('form#account_management').submit(function() {
    event.preventDefault();

    var depositInput = parseFloat($('input#deposit').val());
    var withdrawInput = parseFloat($('input#withdraw').val());
    isNaN(depositInput) ? depositInput = 0 : depositInput = depositInput;
    isNaN(withdrawInput) ? withdrawInput = 0 : withdrawInput = withdrawInput;

    newAccount.deposit(depositInput);
    newAccount.withdraw(withdrawInput);

    $('.balance').text(newAccount.balance.toFixed(2));
    $('#deposit').val(0);
    $('#withdraw').val(0);
    $('#results').show();
  });
});
