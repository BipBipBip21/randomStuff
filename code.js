function myFunction() {
  var inputVal = document.getElementById("text_input");
  //get the element
  if (!inputVal || inputVal.value.length === 0) {
    alert("Please type a message.")
    return //if no value, returns message

  } else if (!inputVal || inputVal.value === " ") {
    alert("Please type a message.")
    return
  } else if (!inputVal || inputVal.value === "Who is Corb?") {
    alert("Corb is an idiot.");
    postMessage();
    return

  } else if (!inputVal || inputVal.value === "Who is Lilly?") {
    alert("Lilly is the most supreme coder of the universe!")
    postMessage();
    return

  } else {
    postMessage();
  }
}

function postMessage() {
  var inputVal = document.getElementById("text_input").value;
  var para = document.createElement("P");
  var node = document.createTextNode(inputVal);
  para.appendChild(node); //creates a text node, and gets the value of text_input
  var element = document.getElementById("div1");
  element.appendChild(para).className = "myStyle";
  //prints text_input's value and assigns it a style
}
