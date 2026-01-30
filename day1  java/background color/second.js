const parent=document.getElementById('parent');
parent.addEventListener ('click',(e)=>{
    //conmsole.log(e.target);
    const child=e.target;
    document.body.style.backgroundColor=child.id;
})