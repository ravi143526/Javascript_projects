
async function getMasterData() {
    let response = await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
    let data = await response.json();
    setTableData(data);
}

function setTableData(todos) {
    console.log(todos);
    let bodyTab = document.getElementById('rowItem');
    todos.forEach(ele => {
        let row = document.createElement('tr');
        delete ele.id;
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'chck';
        row.appendChild(checkbox);
        Object.values(ele).forEach(value => {
            let cell = document.createElement('td');
            cell.innerText = value;
            row.appendChild(cell);
        })
        bodyTab.appendChild(row);
    })
    let check = document.querySelectorAll('#chck');
    console.log(check);
}


getMasterData();




