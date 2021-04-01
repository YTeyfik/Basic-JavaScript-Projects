// Todo eleman ekleme
//eleman seçme
const form = document.querySelector("form");
const input = document.getElementById("txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const tasklist = document.querySelector("#task-list"); //ul

let items;

//load items
loadItems();

//call event listener
eventListeners();

function eventListeners() {
  //submit event
  form.addEventListener("submit", addNewItem);
  //delete an item
  tasklist.addEventListener("click", deleteItem);
  //delete all item
  btnDeleteAll.addEventListener("click", deleteAllItem);
}

function loadItems() {
  items = getItemsFromLS();
  items.forEach(function (item) {
    createItem(item);
  });
}

// get items from local storage
function getItemsFromLS() {
    if(localStorage.getItem('items')===null){
        items=[];
    }
    else{
        items=JSON.parse(localStorage.getItem('items'));
    }
    return items;
}
//set item
function setItemToLS(text){
    items=getItemsFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
}

function deleteItemFromLS(text){
    items=getItemsFromLS();
    items.forEach(function(item,index){
        if(item===text){
            items.splice(index,1);
        }
    });
    localStorage.setItem('items',JSON.stringify(items));
}

function createItem(text) {
  //create li
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(text));
  //create a
  const a = document.createElement("a");
  a.className = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fas fa-times"></i>';

  //add a to li
  li.appendChild(a);

  // add li to ul
  tasklist.appendChild(li);
}

function addNewItem(e) {
  if (input.value === "") {
    alert("add new item");
  } else {
      //create item
    createItem(input.value);

    // save to LS
    setItemToLS(input.value);

    //clear input
    input.value = "";
  }

  //create item

  e.preventDefault();
}

function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    if (confirm("are you sure ?")) {
      e.target.parentElement.parentElement.remove();

      //delete item from LS
      deleteItemFromLS(e.target.parentElement.parentElement.textContent);
    }
  }
  e.preventDefault();
}

function deleteAllItem(e) {
  if (confirm("are you sure ?")) {
   while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
   }
   localStorage.clear();
  }
  //tasklist.innerHTML=''; bu bir alternatif

  e.preventDefault();
}
