console.log("Running insert paragraph");

// create text
var text = "This text isn't supposed to be here";

// wraps the text we wrote in paragraph tags
var para = "<p>" + text + "</p>"

// insert paragraph before the end of the page body
document.body.insertAdjacentHTML("beforeend", text);

// inserting a style would just be creating the style css code with the encolding brackets as a string variable and then inserting it into the documnet's head tag
