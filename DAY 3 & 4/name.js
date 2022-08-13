// document
document;


// fetch elements in 4 ways
// 1) child  2) tagname  3)class 4) id

// 1) child method
document.firstElementChild; //html
document.firstElementChild.firstElementChild; //head
document.firstElementChild.lastElementChild; // body
document.firstElementChild.lastElementChild.firstElementChild;  //h1
//h1 to heading
var heading = document.firstElementChild.lastElementChild.firstElementChild;

heading.innerHTML="Good Bye";
heading.style.color="red";


// excercise - access list 3 =Third and make changes to word & color
document.firstElementChild.lastElementChild.children[5].lastElementChild;
var list3 = document.firstElementChild.lastElementChild.children[5].lastElementChild;
list3.style.color="blue";
list3.innerHTML="Fourth";

// 2) tagename
// above is difficult traverse, hence use getElementsByTagName
document.getElementsByTagName("ul"); // an access any tag in html
document.getElementsByTagName("li");

// access list2 - second and change color to firstElementChild

document.getElementsByTagName("li")[1].style.color="red";

// check length
document.getElementsByTagName("li").length;


// 3) class  ( can be more than one element eX: btn, btn, btn )
// getElementsbyClassName - even more simple
document.getElementsByClassName("btn");
document.getElementsByClassName("btn")[0].style.color="red";


// 4) id
//getElementsbyId ( must be only single )

document.getElementById("title");
document.getElementById("title").innerHTML = "Good Bye"

// 5) document.querySelector
document.querySelector("h1");  // access h1
document.querySelector("#title"); // access h1 as it is ID so #
document.querySelector(".btn"); // access btn as it is class so .

document.querySelector("li a"); // access a tag in list li

// access a tag in body
document.querySelector("body a");


// multi selection via querySelector - NO- cannot be accessed

document.querySelector(".btn #title"); // null is output

// use querySelectorAll
document.querySelectorAll("#list .item");

document.querySelectorAll("#list .item")[2].style.color="red";

// excercise: change list2 - second color - red
document.querySelectorAll("#list .item")[1].style.color="red";

//excercise: change list1 - google to red
document.querySelector("li a").style.color="red";
// only bullet to blue
document.querySelector("li").style.color="blue";

// change background of button
document.querySelector("button").style.backgroundColor="yellow";

// convert h1 to italics
document.querySelector("h1").innerHTML = "<em>Good Morning</em>";


// END Of Session-01



// Intro to DOM - HTML - CSS - JavaScript

// DOM-Doc obj model - tree structure of whole HTML

// ELEMENT SELECTORS

// delete items
document.querySelector(".items");

document.querySelector(".item1");
let item = document.querySelector(".item1");
item.remove();
document.querySelector(".item2");
let item = document.querySelector(".item2");
item.remove();
document.querySelector(".item3");
let item = document.querySelector(".item3");
item.remove();
document.querySelector(".item4");
let item = document.querySelector(".item4");
item.remove();
document.querySelector(".item5");
let item = document.querySelector(".item5");
item.remove();

// update items
let item = document.querySelector(".item1");
item.textContent="Good Morning";


// change item2 to heading
let item = document.querySelector(".item2");
item.innerHTML="<h1>Hello</h1>";


// update button color to red
let button = document.querySelector(".btn");
button.style.background = "red";


// EVENTS
let button = document.querySelector(".btn");
button.addEventListener("click",(e) =>
                        {
    console.log("click");
e.preventDefault();
});

// Keyboard Event
let nameInput = document.querySelector("#name");
nameInput.addEventListener("input",e =>
                           {
    document.querySelector(".container").append(nameInput.value);
});

let emailInput = document.querySelector("#email");
emailInput.addEventListener("input",e =>
                           {
    document.querySelector(".container").append(emailInput.value);
});

/*
// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
*/

// Listen for form submit
function onSubmit(e) {
  e.preventDefault();
}
console.log(nameInput);
console.log(nameInput.value);
console.log(emailInput.value);

// Select entire form & addEventListener to FORM
let myForm = document.querySelector("#my-form");
myForm.addEventListener('submit', onSubmit);

// addEventListener to form on console via ALERT
if(nameInput.value === '' || emailInput.value === '')
{
  alert('Please enter all fields');
}
else
{
  console.log('success');
}

// addEventListener to form on console via Message on <div> selection
let msg = document.querySelector(".msg");


if(nameInput.value === '' || emailInput.value === '')
  {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
  }
  else
  {
    console.log('success');
  }

// Same as above - but remove alert msg after 3seconds
if(nameInput.value === '' || emailInput.value === '')
  {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  }
  else
  {
    console.log('success');
  }

  // As & when users get registered add into LIST
let userList = document.querySelector("#users");


  if(nameInput.value === '' || emailInput.value === '')
  {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  }
  else
  {
    // Create new list item with user
    let li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Append to ul
    userList.appendChild(li);
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }

















//
