const form=document.querySelector('form');
form.addEventListener('submit',(e)=>
   
{    e.preventDefault();
    const income=document.querySelector('#income');//to get input value
    const amount= parseInt(income.value);//to convert string to number
    const result=document.querySelector('h2');//to display result
    let totalTax=0;
    if(amount<=120000)
        totalTax=0;
      else if (amount<=160000)
        totalTax=(amount-120000)*0.15;
        else if (amount<=200000)                                    
            totalTax= (4000)+(amount-160000)*0.20;
            else
            totalTax= (4000)+(8000)+(amount-200000)*0.25;             
        
            result.textContent=`Total tax is: ${totalTax}`;
})