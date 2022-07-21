// fill in javascript code here


let form=document.querySelector("form");
let tbody=document.querySelector("tbody");
form.addEventListener("submit",function(event){
    event.preventDefault();
    
    let obj={
        name:form.name.value,
        id:form.docID.value,
        specialization:form.dept.value,
        experience:form.exp.value,
        email:form.email.value,
        mobile:form.mbl.value,
    };
    let count=0;
    for(let key in obj){
        if(obj[key]==""){
            count++;
        }
    }
    if(count!=6){
        display(obj);
    }

    
    
})

    function display(data){
        let tr=document.createElement("tr");
        
        let name=document.createElement("td");
            name.innerText=data.name;
        
        let id=document.createElement("td");
            id.innerText=data.id;
   
        let special=document.createElement("td");
            special.innerText=data.specialization;

        let exp=document.createElement("td");
            exp.innerText=data.experience;

        let mail=document.createElement("td");
            mail.innerText=data.email;

        let mobile=document.createElement("td");
            mobile.innerText=data.mobile; 

        let role=document.createElement("td");
        let roleText=giveRole(data.experience);
        role.innerText=roleText;

        let del=document.createElement("td");
            del.innerText="Delete";
            del.addEventListener("click",function(elem){
                elem.target.parentNode.remove();
            })

            tr.append(name,id,special,exp,mail,mobile,role,del);
            tbody.append(tr);
}

function giveRole(experience){
        if(experience>5){
            return "Senior"
        }
        else if(experience>=2 && experience<=5){
            return "Junior"
        }
        else if(experience>0 && experience<=1){
            return "Trainee"
        }
        else{
            return ""
        }
        
}