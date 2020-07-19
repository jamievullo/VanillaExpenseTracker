document.addEventListener('DOMContentLoaded', function () {
    submitExpense()
});

function submitExpense() {
    let addExpense = document.getElementById("form-box")
    addExpense.addEventListener('submit', function(event) {
        event.preventDefault();
    })
    // grab all inputted values
    let expenseDate = document.getElementById("expense-date").value
    console.log(expenseDate)
    let expenseDescription = document.getElementById("expense-description").value
    console.log(expenseDescription)
    let expenseLocation = document.getElementById("expense-location").value
    console.log(expenseLocation)
    let expenseAmount = document.getElementById("expense-amount").value
    console.log(expenseAmount)
    let values = [expenseDate, expenseDescription, expenseLocation, expenseAmount]
    addExpenseToTable(values)
}

function addExpenseToTable(values) {
    let expenseTable = document.getElementById("all-expenses")
    let expenseRow = document.getElementById("tr")
    // create delete button for every expense
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete Expense"
    
    for(let i = 0; i < values.length; i++) {
        let expenseList = document.createElement("td")
        let expenses = document.createTextNode(values[i])
        
        expenseList.appendChild(expenses)
        expenseRow.appendChild(expenseList)
        expenseRow.appendChild(deleteButton)
        expenseTable.appendChild(expenseRow)

    }

    deleteExpense(deleteButton, expenseRow)
}

function deleteExpense(deleteButton, expenseRow) {
    deleteButton.addEventListener("click", function() {
        expenseRow.remove()
    })
}
