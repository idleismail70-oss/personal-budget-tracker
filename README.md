# 💰 SpendWise Dashboard

A responsive financial dashboard shell built as an extension of my Budget Tracker project.

This project was developed for the **Week 4 SpendWise Dashboard Shell (CSS Grid & Flexbox)** challenge. The goal was to rebuild the existing Budget Tracker layout using modern CSS layout techniques while keeping the project static and focused on visual structure.

---

## 📌 Project Overview

SpendWise is a modern dashboard interface for viewing personal financial information.

The dashboard includes:

* Sidebar navigation
* Financial overview header
* Total balance summary
* Six financial category cards
* Recent expenses
* Budgeting tips video
* Instructions for using the tracker

The project uses **CSS Grid and Flexbox** to create a clean and responsive dashboard layout.

No JavaScript functionality was added because this week's challenge focuses on the visual structure and layout.

---

## 🖥️ Dashboard Features

### Sidebar Navigation

The dashboard includes a sidebar with navigation items for:

* Dashboard
* Expenses
* Categories
* Reports
* Settings

The navigation uses Flexbox to align the icons and text.

---

### Financial Overview Header

The header displays:

* Welcome message
* Financial Overview title
* Monthly spending description
* Total balance

Flexbox is used to arrange the header content and balance summary.

---

## 💳 Financial Category Cards

The dashboard contains six category cards with realistic static financial information.

### Categories

1. 🍔 Food — `$320.00`
2. 🚌 Transport — `$180.00`
3. 🏠 Rent — `$750.00`
4. 🎬 Entertainment — `$120.00`
5. 💰 Savings — `$500.00`
6. 💡 Utilities — `$150.00`

The six cards are arranged using **CSS Grid**.

Flexbox is used inside each card to align the icon and financial information.

---

## 📊 Recent Expenses

A Recent Expenses section was included to display example financial transactions:

* Groceries — `$45.00`
* Bus Fare — `$5.00`
* Netflix — `$12.00`

The expense items use Flexbox to position the expense name and amount.

---

## 🎨 CSS Custom Properties

The application's theme is controlled using CSS custom properties inside the `:root` selector.

Examples include:

```css
:root {
    --brand-color: #2563eb;
    --accent-color: #16a34a;
    --background-color: #f1f5f9;
    --surface-color: #ffffff;
    --text-primary: #1e293b;
    --text-secondary: #64748b;
}
```

Using CSS variables makes it easier to maintain a consistent visual theme throughout the dashboard.

---

## 🧱 CSS Grid

CSS Grid is used for the overall dashboard layout.

The desktop layout contains:

* A fixed-width sidebar
* A flexible main content area

Grid is also used to arrange the six financial category cards into three columns on larger screens.

Example:

```css
.dashboard {
    display: grid;
    grid-template-columns: 240px 1fr;
}

.categories {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

---

## ↔️ Flexbox

Flexbox is used throughout the interface for smaller layout groups.

It is used for:

* Sidebar navigation
* Logo and brand
* Dashboard header
* Header balance
* Category cards
* Card contents
* Recent expense items

This allows the elements to align naturally without using absolute positioning.

---

## 📱 Responsive Design

The dashboard is responsive and adapts to smaller screens.

A media query is used below **768px**:

```css
@media (max-width: 767px) {
    .dashboard {
        grid-template-columns: 1fr;
    }

    .categories {
        grid-template-columns: 1fr;
    }
}
```

On smaller screens:

* The dashboard changes to a single-column layout.
* The sidebar navigation becomes horizontal.
* The six category cards become one column.
* The header content stacks vertically.
* The content receives smaller spacing.

The responsive layout was verified using the browser's **DevTools Device Toolbar**.

---

## ✨ Card Micro-interactions

The financial category cards include subtle hover and keyboard focus interactions.

The animation lasts **200ms**, which is below the required 250ms maximum.

```css
.category-card {
    transition:
        transform 200ms ease,
        box-shadow 200ms ease;
}

.category-card:hover,
.category-card:focus {
    transform: translateY(-4px);
}
```

Keyboard focus is also clearly indicated using `:focus-visible`.

These interactions make the dashboard feel more responsive and user-friendly.

---

## 🌙 Dark Theme

As a stretch goal, the dashboard supports the user's system dark-mode preference.

The theme is implemented using:

```css
@media (prefers-color-scheme: dark)
```

The dark theme overrides the existing CSS custom properties rather than creating a completely separate stylesheet.

This allows the dashboard to automatically adapt to the user's preferred color scheme.

---

## 🚫 No Absolute Positioning

The dashboard does not use absolute positioning for its page layout.

Instead, the project uses:

* CSS Grid for the main structure
* CSS Grid for the category cards
* Flexbox for internal component layouts

This makes the layout easier to maintain and responsive across different screen sizes.

---

## 🎨 Design Approach

The dashboard uses a clean and professional financial application style.

### Main colors

* **Blue:** Brand and primary interface color
* **Green:** Financial/accent color
* **White:** Dashboard surfaces and cards
* **Light gray:** Page background
* **Dark navy:** Sidebar
* **Gray:** Secondary text

Rounded corners, subtle shadows, consistent spacing, and clear typography are used to create a modern dashboard appearance.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* Google Fonts
* CSS Media Queries
* Responsive Web Design

---

## 📂 Project Structure

```text
personal-Budget-Tracker/
│
├── index.html
├── style.css
├── budget-icon.svg
└── README.md
```

### `index.html`

Contains the static structure of the SpendWise dashboard, including the sidebar, header, category cards, recent expenses, budgeting tips, and instructions.

### `style.css`

Contains the complete visual design and responsive layout, including:

* CSS Grid
* Flexbox
* CSS variables
* Typography
* Colors
* Card styling
* Hover effects
* Keyboard focus states
* Responsive design
* Dark theme

### `budget-icon.svg`

The financial dashboard logo used in the SpendWise brand area.

### `README.md`

Contains documentation explaining the dashboard structure, technologies, layout techniques, responsive behavior, and design decisions.

---

## 🎯 Assignment Requirements

This project addresses the main requirements of the Week 4 challenge.

| Requirement             | Implementation                                           |
| ----------------------- | -------------------------------------------------------- |
| Sidebar / Navigation    | SpendWise sidebar                                        |
| Dashboard Header        | Financial Overview header                                |
| Six Category Cards      | Food, Transport, Rent, Entertainment, Savings, Utilities |
| CSS Grid                | Dashboard and category card layout                       |
| Flexbox                 | Header, sidebar, cards, expense items                    |
| CSS Custom Properties   | Theme variables in `:root`                               |
| Responsive Design       | Media query below 768px                                  |
| DevTools Verification   | Tested using Device Toolbar                              |
| Card Hover              | 200ms transform and shadow                               |
| Keyboard Focus          | `:focus` and `:focus-visible`                            |
| No Absolute Positioning | Grid and Flexbox used instead                            |
| Dark Theme              | `prefers-color-scheme: dark`                             |

---

## 🚀 How to Run the Project

1. Clone or download the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. The SpendWise Dashboard will appear.
5. Use Chrome DevTools Device Toolbar to test the responsive layout.

---

## 👨‍💻 Author

**Ismail Idle**

SpendWise Dashboard — Week 4 CSS Grid & Flexbox Challenge

---

## 📄 License

This project was created for educational purposes as part of a web development learning assignment.
