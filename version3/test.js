// Version 3

/*
1.
Make an API call using the Fetch API or the regular XMLHttpRequest (whichever one you're more comfortable with).
Use the following URL: https://jsonplaceholder.typicode.com/users
Display the "name", "email" and "city" of the first person inside an unordered list.
*/

const url = "https://jsonplaceholder.typicode.com/users";

function createAndAppend(name, parent, text) {
  const elem = document.createElement(name);
  parent.appendChild(elem);
  if (text) {
    elem.textContent = text;
  }
  return elem;
}

fetch(url)
  .then(res => {
    return res.json();
  })
  .then(data => {
    //       console.log(data)
    const body = document.getElementsByTagName("body")[0];
    const person = data[0];
    createAndAppend("ul", body);
    const ul = document.getElementsByTagName("ul")[0];
    createAndAppend("li", ul, person.name);
    createAndAppend("li", ul, person.email);
    createAndAppend("li", ul, person.address.city);
  })
  .catch(err => console.log(err));


/*
2.
Write a function that:
- Takes in an array of strings as an argument
- Sorts the array alphabetically
- Adds

Example: ["Zebra", "Cookie", "Flower"]
Expected output: ["Cookies", "Flowers", "Zebras"]

Make use of the following array:
*/

const fruits = ["Strawberry", "Apple", "Tangerine", "Banana", "Melon", "Pear"];
function myFunction(arr) {
  arr.sort();
  const newArr = arr.map(x => x + "s");
  return newArr;
}
console.log(myFunction(fruits));


/*
3.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Creates a button element (with text "click me!")
- Creates an empty <img> and add it to the document.
- When the button is clicked, inserts an image URL into the <img> tag and remove the button
- Uses the following image URL: https://avatars3.githubusercontent.com/u/20858568?s=200&v=4
*/

const body = document.getElementsByTagName("body")[0];

const button = document.createElement("button");
button.innerText = "Click me!";
const img = document.createElement("img");
body.appendChild(button);
body.appendChild(img);
button.addEventListener("click", buttonClick);
function buttonClick() {
  img.src = "https://avatars3.githubusercontent.com/u/20858568?s=200&v=4";
  body.removeChild(button);
}
