
$(document).ready(function(){


  // $('form').submit(function(event){
  // event.preventDefault();
  var flavors = ["vanilla","chocalate", "strawberry", "Butterscotch"];


  flavors.forEach(function(flavor){
    var sites=["flavor1", "flavor2", "flavor3","flavor4"]
    var number = 0;

    sites.forEach(function(site){
      $('.' + site).text(flavor[number]);
      number++;
});



  //   var userInput = $("input#" + flavor).val();
  //   answerArr.push(userInput);
  //
  //
  //   $("." + blank).text(userInput);
  // });
  //
  // newArray.push(answerArr[1]);
  // newArray.push(answerArr[2]);
  // newArray.push(answerArr[3]);
  // $("#answer-div").show();
  //
  // var sites=["color-bullet", "food-bullet", "pet-bullet"]
  // var number = 0;
  //
  // sites.forEach(function(site){
  //   $('.' + site).text(newArray[number]);
  //   number++;

});
});
