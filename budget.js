// ==========================================
// BUDGET FUNCTIONS
// ==========================================

// Calculate total expenses
export function calculateTotal(expenses) {

    let total = 0;

    for (const expense of expenses) {
        total += expense.amount;
    }

    return Math.round(total * 100) / 100;
}


// ==========================================
// RENDER EXPENSES
// ==========================================

export function renderExpenses(expenses) {

    const tableBody = document.getElementById("expenseTableBody");

    tableBody.innerHTML = "";

    for (const expense of expenses) {

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = expense.name;

        const amountCell = document.createElement("td");
        amountCell.textContent = "$" + expense.amount.toFixed(2);

        const categoryCell = document.createElement("td");
        categoryCell.textContent = expense.category;

        row.appendChild(nameCell);
        row.appendChild(amountCell);
        row.appendChild(categoryCell);

        tableBody.appendChild(row);
    }

    const totalElement = document.getElementById("totalExpenses");

    totalElement.textContent =
        "Total Expenses: $" + calculateTotal(expenses).toFixed(2);
}