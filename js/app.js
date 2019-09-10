(function(){
//Array services
const services = [
    {
        value : 1 ,
        title : "Great-20%"
    },
    {
        value: 2 ,
        title : "ok-10%"
    },
    {
        value : 3 ,
        title : "Not good - 2%"
    }
];
services.forEach(function(service){
const option = document.createElement("option");
option.textContent = service.title;
option.value = service.value;
console.log(option);
document.getElementById("input-service").appendChild(option);
});
const form = document.getElementById("tip-form");
const amount = document.getElementById("input-bill");
const users = document.getElementById("input-users");
const servicex = document.getElementById("input-service");

const feedback= document.querySelector(".feedback");
const loader= document.querySelector(".loader");
const results= document.querySelector(".results");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let bill = amount.value;
    let people = users.value;
    let quality = servicex.value;
    if(bill === "" || bill ==="0" || (people === "" || people === "0")|| quality === "0"){
        feedback.classList.add("showItem","alert-danger");
        feedback.innerHTML = `
        <p>This is wrong bro</p>
        
        <p>Put right values</p>
        ` ;
        setTimeout(function(){
            feedback.classList.remove("showItem","alert-danger");  

        },10000);
        
    }else{
        feedback.classList.add("showItem","alert-success");
        feedback.innerHTML = `<p>Calculating</p>`;
        loader.classList.add("showItem");
        setTimeout(function(){
            feedback.classList.remove("showItem","alert-success");
            loader.classList.remove("showItem");  
            clearForm();
            showResults(bill,people,quality);  
        },4000);
    }
    //show results function
    function showResults(bill,people,quality){
        let percent = 0;
        if(quality=="1"){
            percent = 0.2; 
        }
        else if(quality=="2"){
            percent = 0.1;
        }
        else if(quality=="3"){
            percent = 0.02;
        }
        let tipAmount = parseInt(bill)*percent;
        let total = parseInt(bill)+tipAmount;
        let person = total/parseInt(people);
        results.classList.add("showItem");
        document.getElementById("tip-amount").textContent = tipAmount;
        document.getElementById("total-amount").textContent = total;
        document.getElementById("person-amount").textContent = person.toFixed(2);
        setTimeout(function(){
            results.classList.remove("showItem");
        },10000)
    }
    //clear the form
    function clearForm(){
        amount.value = '';
        users.value = '';
        servicex.value = '';
    }
});




})();