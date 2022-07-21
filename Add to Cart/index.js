// Write all the Javascript here


let form = document.querySelector("form");
let tbody=document.querySelector("tbody");
let h1=document.querySelector("#total-price");
let sum=0;
form.addEventListener("submit",function(elem){
    elem.preventDefault();
    let obj={
        name:form.name.value,
        category:form.category.value,
        brand:form.brand.value,
        price:form.price.value,
        delivery:form.deliveredBy.value,
    };
    let count=0;
    
    for(let key in obj){
        if(obj[key]==""){
            break;
        }
        else{
            count++;
        }
    }
    if(count==5){
        sum=sum+parseInt(obj['price']);
        display(obj);
    }
    else{
        alert("Fill all input fields");
    }


    
})

function display(data){
        
        let tr=document.createElement("tr");

        let name=document.createElement("td");
        name.innerText=data.name;

        let category=document.createElement("td");
        category.innerText=data.category;

        let brand=document.createElement("td");
        brand.innerText=data.brand;

        let price=document.createElement("td");
        price.innerText=data.price;

        let delivery=document.createElement("td");
        delivery.innerText=data.delivery;

        let segment=document.createElement("td");
        let segmentText=giveValue(data.price);
        segment.innerText=segmentText;

        let del =document.createElement("td");
        del.innerText="Delete";
        del.addEventListener("click",function(elem){
            elem.target.parentNode.remove();
            sum=sum-(data.price);
            h1.innerText="Total Price:-"+" "+sum;
        })
        h1.innerText="Total Price:-"+" "+sum;

        tr.append(name,category,brand,price,delivery,segment,del)
        tbody.append(tr)

}

function giveValue(price){
    if(price>1000){
        return "Expensive";
    }
    else{
        return "Not-Expensive"
    }
}