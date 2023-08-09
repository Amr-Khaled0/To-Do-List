const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-input");
const toDoList = document.querySelector("#tasks");


toDoForm.addEventListener("submit" , e => {

    e.preventDefault();
if (toDoInput.value === "" ){
    alert("Please Enter a task")
    return false;
}
else if(toDoInput.value.length > 30){
    alert("Task should not exceeds 20 character");
    return false;   
}


const task = document.createElement("li");

toDoList.appendChild(task);

task.innerHTML= toDoInput.value;
   // Clear Input Field after adding Task

toDoInput.value="";
 // create actions Buttons

const div =document.createElement("div")
div.contentEditable =false;
task.appendChild(div);

const editbtn = document.createElement("span")
editbtn.innerHTML= "Edit";
editbtn.addEventListener("click" , () => {
    
if(editbtn.innerHTML.toLowerCase() ==="edit"){
    task.contentEditable=true;
    task.focus();
    editbtn.innerHTML= "Save";
} else {
    task.contentEditable=false;
    editbtn.innerHTML = "Edit";
}
})

const deletebtn = document.createElement("span");
deletebtn.innerHTML= "Remove";
div.appendChild(editbtn);
div.appendChild(deletebtn);
deletebtn.addEventListener("click" , () => {
    toDoList.removeChild(task);
})

});

