var input = prompt('Select an option: \n\nEnter Q to Quit\n\nEnter W to Withdraw\n\nEnter D to Deposit\n\nEnter B to View Balance\n');

while (input != 'Q') {

  var account = 500;

  function deposit() {
    deposit = prompt('Amount to deposit:');
    newTotal = "New Total: " + (account + deposit * 1);
    alert(newTotal);
  }

  function withdraw() {
    withdraw = prompt('Amount to withdraw:');
    newTotal = "New Total: " + (account - withdraw * 1);
    alert(newTotal);
  }

  switch (input) {
    case 'W': {
      withdraw();
      var input = prompt('Select an option: \n\nEnter Q to Quit\n\nEnter W to Withdraw\n\nEnter D to Deposit\n\nEnter B to View Balance\n');
      break;
    }
    case 'D': {
      deposit();
      var input = prompt('Select an option: \n\nEnter Q to Quit\n\nEnter W to Withdraw\n\nEnter D to Deposit\n\nEnter B to View Balance\n');
      break;
    }
    case 'B': {
      alert(account);
      var input = prompt('Select an option: \n\nEnter Q to Quit\n\nEnter W to Withdraw\n\nEnter D to Deposit\n\nEnter B to View Balance\n');
      break;
    }
    default: {
      var input = prompt('Select an option: \n\nEnter Q to Quit\n\nEnter W to Withdraw\n\nEnter D to Deposit\n\nEnter B to View Balance\n');
    }
  }
}
