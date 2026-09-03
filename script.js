// ==========================================
// IMPORT FUNCTIONS FROM budget.js
// ==========================================

import { calculateTotal, renderExpenses } from "./budget.js";


// ==========================================
// STORE EXPENSES
// ==========================================

const expenses = [];


// ==========================================
// ADD EXPENSE
// ==========================================

const expenseForm = document.getElementById("expenseForm");

expenseForm.addEventListener("submit", function(event) {

    // Stop the browser from refreshing
    event.preventDefault();

    // Get form values
    const name = document.getElementById("expenseName").value;

    const amount = Number(
        document.getElementById("expenseAmount").value
    );

    const category =
        document.getElementById("expenseCategory").value;


    // Create expense object
    const newExpense = {
        name: name,
        amount: amount,
        category: category
    };


    // Add expense to array
    expenses.push(newExpense);


    // Update the table and total
    renderExpenses(expenses);


    // Clear the form
    expenseForm.reset();
});


// ==========================================
// INITIAL DISPLAY
// ==========================================

renderExpenses(expenses);