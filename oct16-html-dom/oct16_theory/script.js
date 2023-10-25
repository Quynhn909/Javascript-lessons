let titleElem = document.getElementById("title");

// log the html tag using its id
console.log(titleElem);

// Extracting the content within the html tag itself
console.log(titleElem.innerHTML);

// Change the content within the tag
titleElem.innerHTML = "Average mark calculation";

// Change css
titleElem.style.color = "red";

// create new elem for html code
let newItemElem = document.createElement("li");

// set up new content for the element
newItemElem.innerHTML = "3. Evan 9-8-8";

// add new element into the ul tag, change html code by js
let studentListElem = document.getElementById("student-list");
studentListElem.appendChild(newItemElem);

// delete form element by id
let studentFormElem = document.getElementById("student-form");
studentFormElem.remove();

