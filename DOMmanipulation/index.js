

const addBtn = document.getElementById('btn');
const inputValue = document.getElementById('addVal');

addBtn.addEventListener('click', function() {
    //let inputValueText = inputValue.value;
    console.log('inputValue', inputValue.value)
    const list = document.getElementById('list');

    const newLi = document.createElement('li');
    const newCheckbox = document.createElement('input');
    
    newCheckbox.type = "checkbox";
    newCheckbox.name = "finishedTask";
    newLi.innerHTML = inputValue.value;
    newLi.appendChild(newCheckbox);
    list.appendChild(newLi);

    inputValue.value = "";
    checkListLength();
})


function checkListLength() {
    const finishedTask = document.getElementsByName('finishedTask');

    console.log(finishedTask.length);

    for(let i = 0; i < finishedTask.length; i++) {
        let itemChecked = false;
        finishedTask[i].addEventListener('change', function() {
            this.parentElement.classList.toggle('checked');
        });

    }

}