let selectedRow = null;
let formData = {};
let formExpense = {};

const onFormSubmit = () => {
  if (validate()) {
    let formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
};

const readFormData = () => {
  formData["project"] = document.getElementById("project").value;
  formData["budget"] = document.getElementById("budget").value;
  console.log(formData);
  return formData;
};

const insertNewRecord = data => {
  document.getElementById("form").style.visibility = "hidden";
  let table = document
    .getElementById("budgetList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.project;
  row2 = newRow.insertCell(1);
  row2.innerHTML = data.budget;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>
                       <a onClick="addexpense(this)">addexpense</a>`;
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

const addexpense = () => {
  const innerTable = document.getElementById("secondtable");
  innerTable.innerHTML = `<td>
  <form id="form-expenses" onsubmit="event.preventDefault();onFormSubmit();" autocomplete="off">
      <div>
          <label>$0.00</label><label class="validation-error hide" id="projectValidationError"></label>
          <input type="number" name="quantity" id="quantity" />
      </div>
      <div>
          <label>Concept</label>
          <input type="text" name="concept" id="concept" />
      </div>
      <div>
      <label>Multiplier</label>
      <input type="number" name="multiplier" id="multiplier" />
  </div>
     <a onClick="createExpense(this)">addexpense</a>
  </form>
</td>
<td>`;
};

const createExpense = () => {
  let formExpense = expenseData();
  let newbudget =
    formData.budget - formExpense.quantity * formExpense.multiplier;
  formData.budget = newbudget;
  row2.innerHTML = formData.budget;
  console.log();
  console.log(formData);
  insertNewExpense(formExpense);
  resetForm();
};

const expenseData = () => {
  formExpense["quantity"] = document.getElementById("quantity").value;
  formExpense["concept"] = document.getElementById("concept").value;
  formExpense["multiplier"] = document.getElementById("multiplier").value;
  console.log(formExpense);

  return formExpense;
};

const insertNewExpense = data => {
  document.getElementById("form").style.visibility = "hidden";
  let tab = document
    .getElementById("expensesList")
    .getElementsByTagName("tbody")[0];
  let newRow = tab.insertRow(tab.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.concept;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.quantity * data.multiplier;
  console.log(data.quantity);
  // cell4 = newRow.insertCell(2);
  // cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
  //                      <a onClick="onDelete(this)">Delete</a>
  //                      <a onClick="addexpense(this)">addexpense</a>`;
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
