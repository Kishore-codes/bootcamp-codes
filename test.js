var listItems = document.querySelector("li:last-of-type"); // accesssing last element of li tag
listItems.textContent = listItems.textContent + "last list";

var body = document.body;
body.style.backgroundColor = "grey";

var items = document.getElementById("list");
items.children[1].style.color = "blue";

items.firstElementChild.textContent = "Iam a first child of ul";

//dom traversal
// var pop = document.body.firstElementChild.nextElementSibling;
// var data = pop.lastElementChild;
// pop.textContent = "iiiiiiiiiiiiiiiiiii";
