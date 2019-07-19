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
  row2.innerHTML = `Presupuesto: $${data.budget}`;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = `<i class="fas fa-edit" onClick="onEdit(this)"></i>
                    <i class="far fa-trash-alt delete"onClick="onDelete(this)"></i>`;
  document.getElementById("add-expence").innerHTML = `<footer class="footer">
  
<i class="fas fa-plus-circle" onClick="addexpense(this)"></i> </footer>`;
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
  innerTable.style.display = "block";

  innerTable.innerHTML = `
 
 
 <td>
 <form id="form-expenses" onsubmit="event.preventDefault();onFormSubmit();" autocomplete="off">
     <div>
         <label></label><label class="validation-error hide" id="projectValidationError"></label>
         <input type="number" name="quantity" id="quantity" placeholder="$0.00" />
     </div>
     <div>
         <label></label>
         <input type="text" name="concept" id="concept" placeholder="Concepto" />
     </div>
     <div>
     <label></label>
     <input type="number" name="multiplier" id="multiplier" placeholder="multiplicador"/>
 </div>
 <i class="far fa-check-square" onClick="createExpense(this)"></i>
 </form>
</td>
<td>`;
};

const createExpense = () => {
  let formExpense = expenseData();
  let totalQuantity = formExpense.quantity * formExpense.multiplier;
  let newbudget = formData.budget - totalQuantity;
  formData.budget = newbudget;
  formData.total = totalQuantity;
  row2.innerHTML = formData.budget;
  const visibility = document.getElementById("expensesList");
  const addExpen = document.getElementById("secondtable");

  visibility.style.display = "block";
  // addExpen.style.display = "none";

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

const onDeleteExpense = td => {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    formData.budget = formData.budget + formData.total;
    row2.innerHTML = formData.budget;
    document.getElementById("expensesList").deleteRow(row.rowIndex);
    resetForm();
  }
};

const insertNewExpense = data => {
  document.getElementById("form").style.visibility = "hidden";
  let tab = document
    .getElementById("expensesList")
    .getElementsByTagName("tbody")[0];
  let newRow = tab.insertRow(tab.length);
  // cell1 = newRow.insertCell(0);
  // // cell1.innerHTML = data.concept;
  // cell2 = newRow.insertCell(1);
  // cell2.innerHTML = data.quantity * data.multiplier;
  console.log(data.quantity);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = ` ${
    data.concept
  }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${data.quantity *
    data.multiplier}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
  <i class="far fa-trash-alt delete"onClick="onDeleteExpense(this)"></i>
  
                      `;
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
