let inputValue = document.getElementById('textInput');
let itemText = document.querySelector('.cst-items');

function getValue() {
    itemText.innerHTML = itemText.innerHTML + 
    `
    <div class="cst-item">
    <div>${inputValue.value}</div>
    <button id="removeBtn">X</button>
    </div>
    `
    let del = document.querySelectorAll('#removeBtn');
    for(let i = 0; i < del.length; i++) {
        del[i].onclick = function() {
            this.parentNode.remove();
        }
    }
    inputValue.value = ' ';
}
