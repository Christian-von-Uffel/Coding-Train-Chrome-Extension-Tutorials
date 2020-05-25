console.log("Running insert text");

// create text
var text = "This text isn't supposed to be here";

// insert text before the end of the page body
document.body.insertAdjacentHTML("beforeend", text);

// inserting a style would just be creating the style css code with the encolding brackets as a string variable and then inserting it into the documnet's head tag
