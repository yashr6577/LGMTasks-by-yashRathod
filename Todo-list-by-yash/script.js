const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTodo(){
    if(inputbox.value === ''){
        alert("You Must Write Something...");
    }
    else{
       let li = document.createElement('li');
       li.innerHTML = inputbox.value;
       listContainer.appendChild(li);
       let span = document.createElement('span');
       span.innerHTML = "\u00d7";
       li.appendChild(span);
    }
    inputbox.value='';
    savedata();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}
,false);

const savedata = ()=>{
    localStorage.setItem('data',listContainer.innerHTML);
}

const showlist = ()=>{
    listContainer.innerHTML = localStorage.getItem('data');
}
showlist();