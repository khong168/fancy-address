$(document).ready(function() {

  $("#formOne").submit(function() {
      $(".magicText").hide();
      $(".well").show();
    event.preventDefault();
    var userNumber = parseInt($("input#inputNumber").val());
    var numbers = ["0",...Array(1000).keys()];
    var beepBoop = [];
    for(var i = 1; i < userNumber + 2; i++){
      var examineNumber = numbers[i];
      if (examineNumber % 3 == 0) {
          beepBoop.push("I'm sorry, Dave. I'm afraid I can't do that.");
      } else if (/1+/.test(examineNumber)) {
          beepBoop.push("Boop");
      } else if (/0+/.test(examineNumber)) {
          beepBoop.push("Beep");
      } else {
          beepBoop.push(examineNumber);
      }
    };
    beepBoop = beepBoop.join(", ");
    $("#nameForMessage").text($("input#inputName").val());
    $("#answer").text(beepBoop + ".");
  }); // (#formOne).submit close

  $("#reverseButton").click(function() {
      $(".magicText").hide();
      $(".well").show();
    event.preventDefault();
    var userNumber = parseInt($("input#inputNumber").val());
    var numbers = ["0",...Array(1000).keys()];
    var beepBoop = [];
    for(var i = 1; i < userNumber + 2; i++){
      var examineNumber = numbers[i];
      if (examineNumber % 3 == 0) {
            beepBoop.push("I'm sorry, Dave. I'm afraid I can't do that.");
      } else if (/1+/.test(examineNumber)) {
          beepBoop.push("Boop");
      } else if (/0+/.test(examineNumber)) {
          beepBoop.push("Beep");
      } else {
          beepBoop.push(examineNumber);
      }
    };
      var beepBoopReversed = beepBoop.reverse();
      beepBoopReversed = beepBoopReversed.join(", ");
    $("#nameForMessage").text($("input#inputName").val());
    $("#answer").text(beepBoopReversed + ".");
  }); // (#formOne).submit close
}); // (document).ready close
