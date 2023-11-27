// variables
let output = document.getElementById("output");

// button
document.getElementById("button").addEventListener("click", buttonclicked);

// function
function buttonclicked() {
  // variables
  let value = document.getElementById("input").value;

  if (value === "does this actually work?") {
    document.getElementById("output").innerHTML =
      "YOU DARE QUESTION THE ALL POWERFUL EIGHT BALL?!?!?";
  } else if (value === "what should I ask?") {
    document.getElementById("output").innerHTML = "A yes or no question";
  } else if (value === "") {
    document.getElementById("output").innerHTML = "ASK A QUESTION FOOL";
    console.log(shake);
  } else {
    // Random Response
    let shake = Math.random();

    if (shake < 0.2) {
      document.getElementById("output").innerHTML = "Concentrate and ask again";
    } else if (shake < 0.4) {
      document.getElementById("output").innerHTML = "Outlook not so good";
    } else if (shake < 0.6) {
      document.getElementById("output").innerHTML = "Don't count on it";
    } else if (shake < 0.8) {
      document.getElementById("output").innerHTML = "As I see it, yes";
    } else {
      document.getElementById("output").innerHTML = "without a doubt";
    }
  }
}
