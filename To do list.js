const taskInput=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn");
const search=document.getElementById("search");
const taskList=document.getElementById("taskList");

const total=document.getElementById("total");
const completed=document.getElementById("completed");

let tasks=JSON.parse(localStorage.getItem("tasks"))||[];

function saveData(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function updateCount(){

    total.textContent=tasks.length;

    let done=0;

    for(let task of tasks){

        if(task.completed){
            done++;
        }

    }

    completed.textContent=done;

}

function renderTasks(list=tasks){

    taskList.innerHTML="";

    if(list.length==0){

        taskList.innerHTML="<div class='empty'>No Tasks Found</div>";

        updateCount();

        return;

    }

    list.sort(function(a,b){

        return b.star-a.star;

    });

    for(let task of list){

        const taskDiv=document.createElement("div");
        taskDiv.className="task";

        const left=document.createElement("div");
        left.className="left";

        const check=document.createElement("input");
        check.type="checkbox";
        check.checked=task.completed;

        const info=document.createElement("div");
        info.className="info";

        const name=document.createElement("div");
        name.className="taskName";
        name.textContent=task.name;

        if(task.completed){
            name.classList.add("completed");
        }

        const editCount=document.createElement("div");
        editCount.className="editCount";

        if(task.edits==0){
            editCount.textContent="Never Edited";
        }
        else if(task.edits==1){
            editCount.textContent="Edited 1 time";
        }
        else{
            editCount.textContent="Edited "+task.edits+" times";
        }

        info.append(name,editCount);

        left.append(check,info);

        const right=document.createElement("div");
        right.className="right";

        const starBtn=document.createElement("button");
        starBtn.className="star";

        if(task.star){
            starBtn.innerHTML="<i class='fa-solid fa-star'></i>";
        }
        else{
            starBtn.innerHTML="<i class='fa-regular fa-star'></i>";
        }

        const editBtn=document.createElement("button");
        editBtn.className="edit";
        editBtn.textContent="Edit";

        const deleteBtn=document.createElement("button");
        deleteBtn.className="delete";
        deleteBtn.textContent="Delete";

        right.append(starBtn,editBtn,deleteBtn);

        taskDiv.append(left,right);

        taskList.append(taskDiv);

        check.addEventListener("change",function(){

            task.completed=check.checked;

            saveData();

            renderTasks();

        });

        starBtn.addEventListener("click",function(){

            task.star=!task.star;

            saveData();

            renderTasks();

        });

       editBtn.addEventListener("click",function(){

    const input=document.createElement("input");
    input.type="text";
    input.value=task.name;
    input.className="editInput";

    const saveBtn=document.createElement("button");
    saveBtn.textContent="Save";
    saveBtn.className="edit";

    info.replaceChild(input,name);
    right.replaceChild(saveBtn,editBtn);

    input.focus();

    saveBtn.addEventListener("click",function(){

        const value=input.value.trim();

        if(value==""){
            return;
        }

        task.name=value;

        task.edits++;

        saveData();

        renderTasks();

    });

});
                deleteBtn.addEventListener("click",function(){

            const index=tasks.indexOf(task);

            if(index>-1){
                tasks.splice(index,1);
            }

            saveData();

            renderTasks();

        });

    }

    updateCount();

}

function addTask(){

    const value=taskInput.value.trim();

    if(value==""){
        return;
    }

    const task={

        name:value,
        completed:false,
        star:false,
        edits:0

    };

    tasks.unshift(task);

    saveData();

    renderTasks();

    taskInput.value="";

    taskInput.focus();

}

addBtn.addEventListener("click",addTask);

taskInput.addEventListener("keydown",function(e){

    if(e.key=="Enter"){
        addTask();
    }

});

search.addEventListener("input",function(){

    const text=search.value.toLowerCase();

    const filtered=tasks.filter(function(task){

        return task.name.toLowerCase().includes(text);

    });

    renderTasks(filtered);

});

renderTasks();