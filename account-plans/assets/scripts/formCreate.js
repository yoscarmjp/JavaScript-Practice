const accountCreate = document.getElementById('create-account');

// Messages Error
const nameError = document.getElementById('nameError')
const costError = document.getElementById('costError')
const descriptionError = document.getElementById('descriptionError')
const categoryError = document.getElementById('categoryError')

// Categorys
const shoppingCategory = document.getElementById('items-shopping')
const servicesCategory = document.getElementById('items-services')
const maintenanceCategory = document.getElementById('items-maintenance')


accountCreate.addEventListener('submit', function (e){
    e.preventDefault();

    const nameInput = document.getElementById('name').value
    const costInput = document.getElementById('cost').value
    const descriptionInput = document.getElementById('description').value
    const categoryInput = document.getElementById('category').value

    let isValid = true;

    if(nameInput.value === ''){
        nameError.innerHTML = 'The name is required'
        isValid = false;
    }
    if(costInput.value === ''){
        costError.innerHTML = 'The cost is required'
        isValid = false;
    }
    if(descriptionInput.value === ''){
        descriptionError.innerHTML = 'The description is required'
        isValid = false;
    }
    if(categoryInput.value === ''){
        categoryError.innerHTML = 'The category is required'
        isValid = false;
    }

    if(isValid){
        let category = categoryInput;
        let item = document.createElement('li');
        if(category === 'shopping'){
            item.innerHTML = `<i style="font-style: normal;">${nameInput}</i>`;
            shoppingCategory.appendChild(item);
        }else if(category === 'services'){
            item.innerHTML = `<i style="font-style: normal;">${nameInput}</i>`;
            servicesCategory.appendChild(item);
        }else if(category === 'maintenance'){
            item.innerHTML = `<i style="font-style: normal;">${nameInput}</i>`;
            maintenanceCategory.appendChild(item);
        }
        accountCreate.reset();
        accountCreate.style.display = "none";
        nameError.innerHTML = '';
        descriptionError.innerHTML = '';
        costError.innerHTML = '';
        categoryError.innerHTML = '';
    }
})