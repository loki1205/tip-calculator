const numbers = document.querySelectorAll(".numbers");
const input = document.getElementById("people");
const input2 = document.getElementById("custom");
const input3 = document.getElementById("bill");
let tip=0;
let tip2=0;
let bill_amount=Number(0);
let people_num=Number(0);
let total=0;
let cost=0;

input3.onchange = function(){
    bill_amount=Number(input3.value);
    updateAmount();
}
for (let number of numbers)
{
    number.onclick = function(){
        for (let number2 of numbers)
        {
            number2.classList.remove("selected");
            number2.classList.remove("final");
            number2.classList.remove("no-hover");
            input2.classList.remove("final");
            tip=0;
        }
        number.classList.add("selected");
        number.classList.add("final");
        number.classList.add("no-hover");
        let finalElement  = document.querySelectorAll(".final")[0];
        tip=finalElement.textContent;
        updateAmount();
    }
    
}

input2.onchange = function(){
    for (let number2 of numbers)
    {
        number2.classList.remove("selected");
        number2.classList.remove("no-hover");
        number2.classList.remove("final");
        tip=0;
    }
    input2.classList.add("final");
    let finalElement  = document.querySelectorAll(".final")[0];
    tip=finalElement.value;
    updateAmount();
}

input.onchange = function(){
    people_num=Number(input.value);
    if (people_num<=0)
    {
        input.classList.add("error");
        document.getElementById("error-label").classList.remove("hide");
    }
    else
    {
        input.classList.remove("error");
        document.getElementById("error-label").classList.add("hide");
    }
    updateAmount();
}

function updateAmount(){

    if (Number.isNaN(Number(tip)))
    {
        tip2=Number(tip.slice(0,tip.indexOf(" ")));
    }
    else
    {
        tip2=tip;
    }
    
    total = (bill_amount*tip2/100)/people_num;
    cost = (bill_amount+(bill_amount*tip2/100))/people_num;
    if (people_num!=0)
    {
        document.getElementById("amount").textContent = "$" + parseFloat(total).toFixed(2);
        document.getElementById("cost").textContent = "$" + parseFloat(cost).toFixed(2);
    }
    
}

document.getElementById("reset").onclick = function(){
    input.value="";
    input2.value="";
    for (let number2 of numbers)
    {
        number2.classList.remove("selected");
        number2.classList.remove("final");
        number2.classList.remove("no-hover");
        input2.classList.remove("final");
        tip=0;
    }
    input3.value="";
    document.getElementById("amount").textContent="$0.00";
    document.getElementById("cost").textContent="$0.00";
}