const list = document.querySelector('.list');
const btn = document.querySelector('.btn');

btn.addEventListener('click' , addList);
let editElement = null;  

function addList() {
    const input = document.querySelector('input');

    if(input.value.trim() == '') {
        alert('Boşluğu doldurun!');
        return;
    }

    if (editElement) {
        editElement.innerText = input.value;
        editElement = null;
        input.value = '';
    }
    else {
        let item = 
        `
        <li>
            <span>${input.value}</span>
            <div class="icons">
                <i onclick="editItem(this)" class="fa-solid fa-pen-to-square"></i>
                <i onclick="deleteItem(this)" class="fa-solid fa-trash"></i>
            </div>
        </li> 
        `

        list.innerHTML += item;
        input.value = '';
    }
}

function deleteItem(icon) { 
    const input = document.querySelector('input');
    icon.parentElement.parentElement.remove(); 

    input.value = '';
}

function editItem(icon) {
    let li = icon.parentElement.parentNode;
    let span = li.querySelector('span');
    const input = document.querySelector('input');

    input.value = span.innerText;
    editElement = span;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addList();
    }
});