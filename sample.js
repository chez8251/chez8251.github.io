function myFunction() {
    var person = prompt("Please enter your name", "Enter Your Name Here");
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! You must die today!";
    }
}
