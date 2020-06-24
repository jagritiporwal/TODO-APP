add = document.getElementById("add");

function getAnUpdate() {
    console.log("updating....");
    tit = document.getElementById("title").value;
    desc = document.getElementById("description").value;

    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonarrayStr = localStorage.getItem('itemJson')
        itemJsonArray = JSON.parse(itemJsonarrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))

    }
    update();
}



function update() {
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonarrayStr = localStorage.getItem('itemJson')
        itemJsonArray = JSON.parse(itemJsonarrayStr);
        // itemJsonArray.push([tit, desc]);
        //slocalStorage.setItem('itemJson', JSON.stringify(itemJsonArray))

    }
    let tablebody = document.getElementById("tablebody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str +=
            ` <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button onclick="deleted(${index})" class="btn btn-primary btn-sm">Delete</button></td>
              </tr>
            `
    });
    tablebody.innerHTML = str;
}
if (add) {
    add.addEventListener('click', getAnUpdate)
    update();
}

function deleted(items) {
    console.log("deleted", items);
    itemJsonarrayStr = localStorage.getItem('itemJson')
    itemJsonArray = JSON.parse(itemJsonarrayStr);
    itemJsonArray.splice(items, 1);
    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    update();



}

function ClearStorage(){
    if(confirm("Do you really want to clear?")){
        localStorage.clear();
        update();
    }
}