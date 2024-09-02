var btnAdd = document.getElementById("btnAdd");
var nameInput = document.getElementById("name"); 
var ageInput = document.getElementById("age");   

var table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];

btnAdd.addEventListener("click", function() {

    var name = nameInput.value;
    var age = ageInput.value;

    if (name !== "" && age !== "") {
        var rowCount = table.rows.length;
        var newRow = table.insertRow(rowCount);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = rowCount + 1;
        cell2.innerHTML = name;
        cell3.innerHTML = age;
        cell4.innerHTML = '<button class="rmv">Remove</button>';

        nameInput.value = "";
        ageInput.value = "";

        cell4Btns = cell4.getElementsByTagName("button")[0]
        cell4Btns.addEventListener("click", function() {
            var row = this.parentNode.parentNode;
            table.deleteRow(row.rowIndex - 1);
        });
    
    }
});

var removeButtons = document.getElementsByClassName("rmv");
for (var i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", function() {
        var row = this.parentNode.parentNode;
        table.deleteRow(row.rowIndex - 1);
    });
}

