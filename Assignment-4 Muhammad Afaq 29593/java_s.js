// Create ,read,update, delete
// global variable
var row = null;
function Submit() {
  var dataEntered = retrieveData();
  var readData = readingDataFromLocalStorage(dataEntered);
  if (dataEntered == false) {
    Msg.innerHTML = "Please Enter Data!";
  } else {
    if (row == null) {
      insert(readData);
      Msg.innerHTML = "Inserted";
    } else {
      update();
      Msg.innerHTML = "Updated";
    }
  }
  document.getElementById("form").reset();
}
// Retrieveing Data from form
function retrieveData() {
  var name1 = document.getElementById("name").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var arr = [name1, number, email];
  if (arr.includes("")) {
    return false;
  } else {
    return arr;
  }
}
// Read
// data in local storage
function readingDataFromLocalStorage(dataEntered) {
  // storing data in local storage
  var n = localStorage.setItem("Name", dataEntered[0]);
  var p = localStorage.setItem("Number", dataEntered[1]);
  var e = localStorage.setItem("Email", dataEntered[2]);
  //    getting values from local to table
  var n1 = localStorage.getItem("Name", n);
  var p1 = localStorage.getItem("Number", p);
  var e1 = localStorage.getItem("Email", e);

  var arr1 = [n1, p1, e1];

  return arr1;
}
// Insert
function insert(readData) {
  var row = table.insertRow();
  row.insertCell(0).innerHTML = readData[0];
  row.insertCell(1).innerHTML = readData[1];
  row.insertCell(2).innerHTML = readData[2];
  row.insertCell(3).innerHTML = `<button onclick= edit(this)>Edit</button>
                                 <button onclick= remove(this)>Delete</button>`;
}
// Edit
function edit(td) {
  row = td.parentElement.parentElement;
  document.getElementById("name").value = row.cells[0].innerHTML;
  document.getElementById("number").value = row.cells[1].innerHTML;
  document.getElementById("email").value = row.cells[2].innerHTML;
}

// Update
function update() {
  row.cells[0].innerHTML = document.getElementById("name").value;
  row.cells[1].innerHTML = document.getElementById("number").value;
  row.cells[2].innerHTML = document.getElementById("email").value;
  row = null;
}

// Delete
function remove(td) {
  row = td.parentElement.parentElement;
  document.getElementById("table").deleteRow(row.rowIndex);
}
