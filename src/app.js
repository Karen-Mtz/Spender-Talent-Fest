let selectedRow = null;

const onFormSubmit = () => {
  if (validate()) {
    let formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
};

const readFormData = () => {
  let formData = {};
  formData["project"] = document.getElementById("project").value;
  formData["budget"] = document.getElementById("budget").value;
  console.log(formData);
  return formData;
};

const insertNewRecord = data => {
  document.getElementById("form").style.visibility = "hidden";
  let button = document.createElement("button");
  button.innerHTML = "Add expense";
  let body = document.getElementsByTagName("body")[0];
  body.appendChild(button);
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
};

const resetForm = () => {
  document.getElementById("project").value = "";
  document.getElementById("budget").value = "";

  selectedRow = null;
};

const onEdit = td => {
  document.getElementById("form").style.visibility = "visible";
  selectedRow = td.parentElement.parentElement;
  document.getElementById("project").value = selectedRow.cells[0].innerHTML;
  document.getElementById("budget").value = selectedRow.cells[1].innerHTML;
};
const updateRecord = formData => {
  document.getElementById("form").style.visibility = "hidden";
  selectedRow.cells[0].innerHTML = formData.project;
  selectedRow.cells[1].innerHTML = formData.budget;
};

const onDelete = td => {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("budgetList").deleteRow(row.rowIndex);
    resetForm();
  }
};

const validate = () => {
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
};
