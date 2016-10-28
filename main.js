function check() {

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var color;


   if (question3 == "pasta") {
   	color = "Dark Purple";
   }

   if (question3 == "meats") {
   	color = "Moody Yellow";
   }

   if (question3 == "cheeseburger") {
   	color = " Bright Aqua";
   }

   if (question3 == "salad") {
   	color = "Maroon";
   }





document.getElementById("after_submit").style.visibility = "Visible";
document.getElementById("number_correct").innerHTML = "You're color is " + color + "!";

}