let list = document.getElementsByTagName("ul");
let btn = document.getElementsByTagName("button");

function createDeleteButton() {
  'use strict';
  let button = document.createElement("button");
  let x = document.createTextNode("\u00D7");
  button.appendChild(x);
  button.onclick = function deleteElement() {
    this.parentElement.style.display = "none";
  };
  return button;
}

btn[0].addEventListener("click", () => {
  'use strict';
  let element = document.getElementById("myInput").value;
  if (element) {
    let li = document.createElement("li");
    let text = document.createTextNode(element);
    li.appendChild(text);
    li.appendChild(createDeleteButton());
    list[0].appendChild(li);
  } else {
    alert("enter task");
  }
  document.getElementById("myInput").value = "";

});

list[0].addEventListener("click", (li) => {
  li.target.classList.toggle("checked");
}, false);