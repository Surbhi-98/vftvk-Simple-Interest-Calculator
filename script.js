//Function for calculating interest, validating input and printing output.
function compute()
{
    //create reference to the input elements 
    var principal = document.getElementById("principal").value;
    //check if principal field is less than or equal to zero on not.
    if(principal<=0)
    {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return false;
    }
    //create reference to the input elements 
    var rate = document.getElementById("rate").value; 
    var years = document.getElementById("years").value;
    //calculate the interest.
    var amount= principal * years * rate / 100; 
    //convert the no. of years into actual year.
    var year = new Date().getFullYear()+parseInt(years);
    //Print output in desired way and reference to the result input.
    document.getElementById("result").innerHTML="\<br\>if you deposit "+"<span class=highlight>"+principal+"</span>"+",\<br\> at an interest rate of "+"<span class=highlight>"+rate+"%.</span>"+"\<br\>you will recieve an amount of "+"<span class=highlight>"+amount+"</span>"+",\<br\>in the year "+"<span class=highlight>"+year+"</span>"+"\<br\>"
}
//Function to update rate after selecting the value from range slider.
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
} 
        