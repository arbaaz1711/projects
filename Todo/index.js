


document.querySelector("form").addEventListener("submit",todoApp)

let taskArr;
if(localStorage.getItem("array") == null){
    taskArr=[];
}
else{
    taskArr=JSON.parse(localStorage.getItem("array"));
}
displayTable(taskArr);
// let myArr = [] ;
function todoApp(event){
    event.preventDefault();
    let taskName = document.querySelector("#task").value;
    let priority = document.querySelector("#priority").value;
    
     let taskObj = {
        task: taskName,
        prior: priority,
    };
    taskArr.push(taskObj);
    localStorage.setItem("array",JSON.stringify(taskArr));
    
    displayTable(taskArr);

}

function displayTable(taskArr){
    document.querySelector("tbody").innerHTML="";
    taskArr.forEach(function(elem,index){
        let row = document.createElement("tr");
        let col1 = document.createElement("td");
        col1.innerText=elem.task
        let col2 = document.createElement("td");
        col2.innerText=elem.prior
            if(elem.prior == "High"){
                col2.style.backgroundColor = "red";
            }
            else{
                col2.style.backgroundColor = "green";
            }
            
        let col3 = document.createElement("td");
        col3.innerText="Delete";
        col3.addEventListener("click",function(event){
            event.target.parentNode.remove();
            taskArr.splice(index,1);
            localStorage.setItem("array",JSON.stringify(taskArr));
        })

            col3.style.color = "red";
        row.append(col1,col2,col3)
        document.querySelector("tbody").append(row);
    })


    }
