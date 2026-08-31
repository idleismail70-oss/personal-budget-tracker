# 💰 SpendWise Dashboard

A responsive personal finance dashboard built as an extension of my Budget Tracker project.

This project was developed as part of the **Week 5 Publish and Polish** challenge. The goal this week was to publish the existing SpendWise dashboard using GitHub Pages and add the finishing touches that make the project professional and shareable.

The project remains a **static frontend project** at this stage. JavaScript functionality for adding, calculating, and managing expenses will begin next week.

---

## 🌐 Live Website

The SpendWise Dashboard is published using GitHub Pages:

**https://idleismail70-oss.github.io/personal-budget-tracker/**

The website can be accessed publicly without downloading the project.

---

## 📌 Project Overview

SpendWise is a modern dashboard interface designed for viewing personal financial information.

The dashboard currently includes:

* Sidebar navigation
* Financial overview header
* Total balance summary
* Six financial category cards
* Recent expenses
* Budgeting tips video
* Instructions for using the tracker
* Responsive layout
* Dark theme support
* Custom favicon
* Page title and Open Graph metadata

The project uses **HTML5 and CSS3**, with CSS Grid and Flexbox providing the main layout structure.

No JavaScript functionality has been added yet because JavaScript development starts in the next week of the course.

---

## 💳 Financial Category Cards

The dashboard contains six categories with realistic static financial information:

1. 🍔 Food — `$320.00`
2. 🚌 Transport — `$180.00`
3. 🏠 Rent — `$750.00`
4. 🎬 Entertainment — `$120.00`
5. 💰 Savings — `$500.00`
6. 💡 Utilities — `$150.00`

The category cards are arranged using CSS Grid, while Flexbox is used to align the icon and information inside each card.

---

## 📊 Recent Expenses

The dashboard contains example expense information, including:

* Groceries — `$45.00`
* Bus Fare — `$5.00`
* Netflix — `$12.00`

These are currently static examples.

The project does not yet store or calculate expenses because the JavaScript functionality will be introduced next week.

---

## 🎨 Visual Design

The dashboard uses a clean financial application design with:

* Blue as the primary brand color
* Green as the financial accent color
* White dashboard surfaces
* Light gray background
* Dark navy sidebar
* Gray secondary text
* Rounded cards
* Subtle shadows
* Consistent spacing
* Google Fonts

The design was developed using CSS custom properties so that the theme can be maintained consistently throughout the application.

---

## 🧱 CSS Grid

CSS Grid is used for the main dashboard structure.

The desktop layout contains:

* A sidebar
* A flexible main content area

Grid is also used to arrange the six financial category cards.

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

Flexbox is used throughout the dashboard for internal layouts.

It is used for:

* Sidebar navigation
* Logo and brand
* Dashboard header
* Header balance
* Category cards
* Card contents
* Recent expense items

The project does not use absolute positioning for the main page layout.

---

## 📱 Responsive Design

The dashboard adapts to smaller screen sizes using CSS media queries.

Below **768px**, the layout changes to a single-column structure.

On smaller screens:

* The dashboard changes to one column.
* Sidebar navigation becomes horizontal.
* Category cards become one column.
* Header content stacks vertically.
* Content spacing is reduced.
* The budgeting video adapts to the smaller screen.

The responsive layout was tested using the browser's **DevTools Device Toolbar**.

---

## ✨ Card Micro-interactions

The category cards include subtle hover and keyboard focus interactions.

The transition lasts **200ms**, which is below the required 250ms maximum.

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

The cards also include visible keyboard focus states using `:focus-visible`.

---

## 🌙 Dark Theme

The dashboard supports the user's system dark-mode preference.

The dark theme uses:

```css
@media (prefers-color-scheme: dark)
```

Instead of creating a separate stylesheet, the theme overrides the existing CSS custom properties.

This allows the dashboard to automatically adapt to the user's system appearance preference.

---

# 🏷️ Page Title, Favicon & Meta Tags

As part of the Week 5 publishing requirements, the project includes a clear page title:

```html
<title>SpendWise - Personal Budget Tracker</title>
```

A favicon was also added using the existing project logo:

```html
<link rel="icon" type="image/svg+xml" href="budget-icon.svg">
```

Open Graph meta tags were added to improve how the project can appear when its link is shared on supported platforms.

The metadata includes:

* Open Graph title
* Open Graph description
* Open Graph type
* Open Graph URL

Example:

```html
<meta property="og:title" content="SpendWise - Personal Budget Tracker">
<meta property="og:description" content="A clean and responsive personal budget tracker dashboard for managing and viewing expenses.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://idleismail70-oss.github.io/personal-budget-tracker/">
```

---

## 🌐 GitHub Pages

The project was published using **GitHub Pages** from the `main` branch and the root directory.

The deployment makes the SpendWise Dashboard publicly accessible through:

**https://idleismail70-oss.github.io/personal-budget-tracker/**

---

## 🧪 Testing and Feedback

The live website was tested at different screen sizes using the browser's responsive design tools.

Testing focused on:

* Desktop layout
* Mobile layout
* Sidebar behavior
* Category card layout
* Header responsiveness
* Text readability
* General visual appearance

Feedback was also requested from another person to review the dashboard and provide an outside perspective on the design and usability.

### Feedback

The feedback received will be used to identify areas that can be improved as the project continues to develop.

---

## 🚀 What's Coming Next?

The current version focuses on the **visual design and static dashboard structure**.

Starting next week, JavaScript functionality will be introduced.

Planned functionality includes:

* Adding expenses dynamically
* Calculating totals
* Updating the dashboard when expenses are added
* Managing expense data
* Making the Budget Tracker interactive
* Improving the overall user experience

The current static dashboard provides the visual foundation for these future features.

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
* Git
* GitHub
* GitHub Pages

JavaScript functionality has **not been implemented yet** and will begin next week.

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

Contains the structure of the SpendWise dashboard, including the sidebar, header, financial category cards, recent expenses, budgeting tips, instructions, page metadata, and favicon.

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

The logo used as the SpendWise dashboard icon and favicon.

### `README.md`

Contains documentation explaining the project, technologies, design decisions, publishing process, testing, and future development.

---

## 📅 Project Progress

| Week       | Work Completed                                          |
| ---------- | ------------------------------------------------------- |
| Week 1     | Initial project setup                                   |
| Week 2     | Static Budget Tracker structure                         |
| Week 3     | Visual identity using CSS                               |
| Week 4     | Dashboard layout using CSS Grid & Flexbox               |
| **Week 5** | **GitHub Pages, favicon, metadata, README and testing** |
| Week 6     | JavaScript functionality — planned                      |

---

## 👨‍💻 Author

**Ismail Idle**

SpendWise Dashboard — Personal Budget Tracker

Built as part of my Software Engineering learning journey.

---

## 📄 License

This project was created for educational purposes as part of a web development learning assignment.
