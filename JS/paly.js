// button section interactivity 1st

document.getElementById('btn-add').addEventListener('click', function(){
    // console.log(32);
    const inputItem = document.getElementById('input-field')
    const inputItemValue = inputItem.value
    console.log(inputItemValue)

    //  step - 02

    const addElement = document.getElementById('items-section-container');
    const newElement = document.createElement('p');
    newElement.innerText = inputItemValue;
    newElement.classList.add("design")
    addElement.appendChild(newElement);
    inputItem.value = '';
})

// step - 3 (remove element)
document.getElementById('items-section-container').addEventListener('click', function(e){
    e.target.parentNode.removeChild(e.target)
})