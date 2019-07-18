let selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    let formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  let formData = {};
  formData["project"] = document.getElementById("project").value;
  formData["budget"] = document.getElementById("budget").value;

  return formData;
}

function insertNewRecord(data) {
  let table = document
    .getElementById("budgetList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.project;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.budget;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("project").value = "";
  document.getElementById("budget").value = "";

  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("project").value = selectedRow.cells[0].innerHTML;
  document.getElementById("budget").value = selectedRow.cells[1].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.project;
  selectedRow.cells[1].innerHTML = formData.budget;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("budgetList").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("project").value == "") {
    isValid = false;
    document.getElementById("projectValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("projectValidationError")
        .classList.contains("hide")
    )
      document.getElementById("projectValidationError").classList.add("hide");
  }
  return isValid;
}
