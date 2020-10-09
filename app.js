var list = document.getElementById("list")





function addTodo(){

var todo_item =document.getElementById("todo-item");

//create li tag with text node

var li = document.createElement('li');
var liText = document.createTextNode(todo_item.value);
li.appendChild(liText); 


//delete btn with create element
var delBtn = document.createElement("button");
var delText= document.createTextNode("DELETE");
delBtn.setAttribute("class" , "btn");
delBtn.setAttribute("onclick" , "delteItem(this)");

delBtn.appendChild(delText);

//cerate Edit Button
var editBtn = document.createElement("button");
var editText = document.createTextNode("Edit");
editBtn.appendChild(editText);
editBtn.setAttribute("class" , "edit");

editBtn.setAttribute("onclick" , "editItem(this)")
li.appendChild(delBtn);
li.appendChild(editBtn);

list.appendChild(li);
todo_item.value = ("")
 console.log(li);


    }


    function delteItem(e){

e.parentNode.remove()

    }


    function editItem(e){

        // console.log(e.parentNode.firstChild.nodeValue)
        var val = prompt("Enter Udated Value" , e.parentNode.firstChild.nodeValue)
        e.parentNode.firstChild.nodeValue = val ; 


    }

    function deleteAll() {

list.innerHTML = "" ;

    }