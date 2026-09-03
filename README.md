# SpendWise – Personal Budget Tracker

SpendWise is a responsive personal budget tracker designed to help users monitor their expenses and understand their spending.

The project was developed in stages, starting with the dashboard interface using HTML and CSS and later adding JavaScript functionality, ES Modules, and Bootstrap styling.

## Features

* 📊 Personal budget dashboard
* 💰 Expense tracking
* ➕ Add new expenses
* 🏷️ Expense categories
* 🧮 Automatic calculation of total expenses
* 📋 Dynamic expense table
* 📱 Responsive design for desktop and mobile screens
* 🎨 Custom dashboard design
* 🧩 Modular JavaScript using ES Modules
* Bootstrap form, grid, button, and table components

## How It Works

Users can enter:

* Expense name
* Expense amount
* Expense category

After submitting the form, JavaScript adds the expense to the expense table and automatically updates the total expenses.

## JavaScript Structure

The project uses JavaScript modules to keep the code organized.

### `script.js`

The main JavaScript file:

* Handles the expense form
* Stores expenses in an array
* Adds new expenses
* Imports functions from `budget.js`
* Updates the expense display

### `budget.js`

Contains reusable budget functions:

* `calculateTotal()` – calculates the total amount of expenses
* `renderExpenses()` – displays expenses in the table and updates the total

The functions are exported from `budget.js` and imported into `script.js` using ES Modules.

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* JavaScript ES Modules
* Bootstrap 5
* Git & GitHub
* GitHub Pages

## Project Structure

```text
personal-budget-tracker/
│
├── index.html
├── style.css
├── script.js
├── budget.js
├── budget-icon.svg
└── README.md
```

## Running the Project

1. Download or clone the project.
2. Open the project folder in VS Code.
3. Open `index.html` using a local server such as Live Server.
4. Enter an expense.
5. Click **Add Expense**.
6. The expense will appear in the table and the total will update automatically.

## Responsive Design

SpendWise is designed to work across different screen sizes.

The layout adapts for:

* Desktop computers
* Tablets
* Mobile phones

Bootstrap's responsive grid is also used in the expense form to improve the layout on different screen sizes.

## Live Project

**GitHub Pages:**
https://idleismail70-oss.github.io/personal-budget-tracker/

## Project Status

✅ HTML structure completed
✅ Custom CSS dashboard completed
✅ JavaScript expense tracking completed
✅ Expense total calculation completed
✅ ES Modules implemented
✅ Bootstrap integrated
✅ Responsive design implemented
✅ Ready for final publication

````

### Important

After pasting it into `README.md`:

1. **Save** the file.
2. Open your terminal in the project folder.
3. Run:

```bash
git add README.md
git commit -m "Update README for final SpendWise project"
git push
````

Then we will do the **final testing checklist and GitHub Pages verification** before you submit.
