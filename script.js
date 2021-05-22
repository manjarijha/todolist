let addToDoButton = document.getElementById('addToDo');
let toDoContainer =  document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

console.log(inputField.Value);

addToDoButton.addEventListener('click', function(){
var paragraph = document.createElement('p')
paragraph.classList.add('paragraph-styling')
paragraph.innerText= inputField.value;
toDoContainer.appendChild(paragraph);
inputField.value="";

const completedButton = document.createElement("button");
completedButton.innerHTML= '<i class= "fas fa-check"></i>';
completedButton.classList.add("complete-btn");
toDoContainer.appendChild(completedButton)

const trashButton = document.createElement("button");
trashButton.innerHTML= '<i class= "fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
toDoContainer.appendChild(trashButton)

completedButton.addEventListener('click', function(){
    paragraph.style.textDecoration= 'line-through';
    toDoContainer.removeChild(completedButton);
})

trashButton.addEventListener('click', function(){
  toDoContainer.removeChild(paragraph);
  toDoContainer.removeChild(trashButton);
})


})