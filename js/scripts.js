
$(document).ready(function(){
  $('form').submit(function(event){
  event.preventDefault();
  var blanks = ["name","color", "food", "pet", "friend", "vacation"];

  var answerArr = [];
  blanks.forEach(function(blank){
    var userInput = $("input#" + blank).val();
    answerArr.push(userInput);


    $("." + blank).text(userInput);
  });

  newArray.push(answerArr[1]);
  newArray.push(answerArr[2]);
  newArray.push(answerArr[3]);
  $("#answer-div").show();

  var sites=["color-bullet", "food-bullet", "pet-bullet"]
  var number = 0;

  sites.forEach(function(site){
    $('.' + site).text(newArray[number]);
    number++;
  });
});
});
