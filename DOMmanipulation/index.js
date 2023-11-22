

const addBtn = document.getElementById('btn');
const inputValue = document.getElementById('addVal');
const list = document.getElementById('list');
let newListArr = [];

addBtn.addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.innerHTML = inputValue.value;

    const newCheckbox = document.createElement('input');
    newCheckbox.type = "checkbox";
    newCheckbox.name = "finishedTask";

    newLi.appendChild(newCheckbox);
    list.appendChild(newLi);

    inputValue.value = "";
    updatingList();
});

function updatingList() {
    newListArr = list.children;
    runningTask();
}

function runningTask() {
    for(let i = 0; i < newListArr.length; i++) {
        let item = newListArr[i];
        item.addEventListener('click', function() {
            this.classList.toggle('checked')
        })
    }
}

updatingList();
