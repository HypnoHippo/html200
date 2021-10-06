let account = 500;

function initialize() {
  var input = prompt('Select an option: \n\nEnter Q to Quit\n\nEnter W to Withdraw\n\nEnter D to Deposit\n\nEnter B to View Balance\n');

  while (input != 'Q') {

    function deposit() {
      deposit = prompt('Amount to deposit:');
      amount = Number(deposit);
      account += amount;
    }

    function withdraw() {
      withdraw = prompt('Amount to withdraw:');
      amount = Number(withdraw);
      account -= amount;
    }

    function checkBalance() {
      alert('Current Total: $' + account);
    }

    switch (input) {
      case 'W': {
        withdraw();
        checkBalance();
        var input = prompt('Select an option: \n\nEnter Q to Quit\n\nEnter W to Withdraw\n\nEnter D to Deposit\n\nEnter B to View Balance\n');
        break;
      }
      case 'D': {
        deposit();
        checkBalance();
        var input = prompt('Select an option: \n\nEnter Q to Quit\n\nEnter W to Withdraw\n\nEnter D to Deposit\n\nEnter B to View Balance\n');
        break;
      }
      case 'B': {
        checkBalance();
        var input = prompt('Select an option: \n\nEnter Q to Quit\n\nEnter W to Withdraw\n\nEnter D to Deposit\n\nEnter B to View Balance\n');
        break;
      }
      default: {
        var input = prompt('Select an option: \n\nEnter Q to Quit\n\nEnter W to Withdraw\n\nEnter D to Deposit\n\nEnter B to View Balance\n');
      }
    }
  }
}
