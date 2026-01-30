const form =document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();//to prevent reloading of the page
    const Boy=document.getElementById('Boy')
    const Girl=document.getElementById('girl');
   const l1=Boy.value.length;
   const l2=Girl.value.length;

   const result=Math.floor((l1/l2)*139);
    document.querySelector('h2').textContent=`Result:${result}%`;
})