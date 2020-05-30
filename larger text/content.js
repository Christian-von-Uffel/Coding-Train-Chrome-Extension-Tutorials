console.log("Running larger text extension");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
  console.log(message.txt);
  if (message.txt === "hello") {
    let paragraphs = document.getElementsByTagName('p');
    for (elt of paragraphs) {
      elt.style['font-size'] = '20px';
      elt.style['line-height'] = '1.5em';
      elt.style['white-space'] = 'pre-line';
      document.body.style.backgroundColor = "#FFDEAD";
    };
  }
}
