const addPlanBtn = document.getElementById('add-plans');
const formCreate = document.getElementById('create-account');
const closebtn = document.getElementById('close');

addPlanBtn.addEventListener('click', function (){
    if(formCreate.style.display == "flex"){
        formCreate.style.display = "none";
    }else{
        formCreate.style.display = "flex";
    }
});


closebtn.addEventListener('click', function(){
    formCreate.style.display = "none";
    formCreate.reset();
})