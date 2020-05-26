console.log("Running insert sidebar?");

// create variable to store sidebar html
var sidebarHTML = `  <!-- insert sidebar -->
  <div id="mySidebar" class="sidebar">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">⇥</a>
    <h2 class="notes-header">
      Notes go here
    </h2>

    <!-- basic text form -->
    <form id="note-form">
      <textarea id="new-note" placeholder="Type a note and press enter to save"></textarea>
    </form>
  </div>`;

// insert sidebar html into the webpage
document.body.insertAdjacentHTML("beforeend",sidebarHTML);

// create variable to store the sidebar button
var openSidebarButton = `<button class="openbtn" onclick="openNav()">⇤</button>`

// insert sidebar button into the page
document.body.insertAdjacentHTML("beforeend",openSidebarButton);

// save sidebar CSS
var sidebarStyle = `
<style>
  .notes-header {
    color: black;
    font-size: 21px;
    font-weight: bold;
  }

  .sidebar {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 2147483647;
    top: 0;
    right: 0;
    background-color: #fff;
    overflow-x: hidden;
    transition: 0.3s;
    padding-top: 60px;
    border-left-style: solid;
    box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
  }

  .sidebar a {
    padding: 8px 8px 8px 24px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  .sidebar a:hover {
    color: #f1f1f1;
  }

  .sidebar .closebtn {
    position: absolute;
    top: 0;
    left: 0px;
    font-size: 36px;
    margin-left: 0px;
  }

  .openbtn {
    position: fixed;
    z-index: 2147483646;
    top: 120px;
    right: 0px;
    font-size: 24px;
    cursor: pointer;
    background-color: #333;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px 0 0 5px;
    box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
  }

  .openbtn:hover {
    background-color: #444;
  }

  .page-link {
    padding-top: 20px;
    padding-bottom: 12px;
  }

  .page-title {
    padding-top: 18px;
    font-weight: bold;
    font-size: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .page-url {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 18px;
    padding-top: 12px;
    color: #666
  }

  /* accordion view settings */
  .accordion {
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: center;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    transition: 0.4s;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .accordion:after {
      content: " ▼";
  }

  .active, .accordion:hover {
    background-color: #ccc;
  }

  .panel {
    padding: 0 18px;
    display: none;
    background-color: white;
    overflow: hidden;
  }

  .marked {
    background-color: #ffe780;
    font-size: 20px;
  }
  /* end of accordion settings */

  #main {
    transition: width .2s;
    padding: 16px;
  }

  #nav-links {
    padding-right: 18px;
  }

  .new-note {
    width: 84%;
    margin: auto;
  }

  #note-form {
    padding: 24px;
  }

  #new-note {
    width: 100%;
    margin: auto;
    padding: 12px 14px;
    font-size: 14px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #4A86E8;
    border-radius: 3px;
    resize: none;
  }

  .note-in-sidebar {
    max-width: 84%;
    margin:auto;
    font-size: 16px;
  }

  .notes-header {
  text-align: center;
  }
  /* style the input text */
  input#new-note[type=text] {
    width: 100%;
    padding: 12px 14px;
    font-size: 14px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #4A86E8;
    border-radius: 3px;
  }
</style>
`;

// insert sidebar style
document.head.insertAdjacentHTML("beforeend",sidebarStyle);

// // save script
// var sidebarScripts = `<script>

    // On running openNav, change the sidebar width to 300px and decrease the main section's width by 300px
    function openNav() {
      document.getElementById("mySidebar").style.width = "300px";
      // document.getElementById("main").style.width = "calc(100% - 300px)";

      // Make the text field immediately active on open
      document.getElementById("new-note").focus();
    }

    // On running closeNav, change the sidebar width to 0px and reset the main section's width to 100%
    function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      // document.getElementById("main").style.width= "100%";
    }

      // On pressing command + K, run the function openNav
      document.onkeydown = function(e) {
        if (e.metaKey && e.which ==75) {
          openNav()
          // alert("Command + K shortcut combination was pressed");
        }
    };


      document.addEventListener('keydown', function(event) {

        // if the user presses enter...
        if (event.keyCode == '13') {

          // once, the note's been inserted into the page, close the sidebar
          closeNav();

          // grab the value of the text input and store it in variable "noteText"
        	var noteText = document.getElementById("new-note").value;

          // wraps noteText in paragraph tags; not robust
          var notePara = '<p class="note-in-sidebar">' + noteText + "</p>";

          // save the position of the note form so we can insert the value of our note's text before it
      	  var note = document.getElementById("note-form");

          // insert the note's text into the webpage before the form
        	note.insertAdjacentHTML("beforebegin", notePara);

          // reset the value of the input field when pressing enter
          document.getElementById("new-note").value = null;

        }
      });

// </script>`;
//
// document.body.insertAdjacentHTML("beforeend",sidebarScripts);
