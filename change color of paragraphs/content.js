console.log("Running change color of paragraphs");

let paragraphs = document.getElementsByTagName('p');
for (elt of paragraphs) {
  elt.style['background-color'] = '#ffe780';
};
