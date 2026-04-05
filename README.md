# Finance Dashboard UI

## Overview

This project is a frontend finance dashboard built using React. It helps users track their financial activity by providing a clear summary, transaction history, and visual insights.
## Features

* Dashboard summary (Balance, Income, Expenses)
* Line chart for financial trends
* Pie chart for spending breakdown
* Transactions list with filtering and search
* Role-based UI (Admin and Viewer)
* Insights (highest spending category)
* Data persistence using localStorage
## Tech Stack

* React (Vite)
* JavaScript (ES6)
* Context API (state management)
* Recharts (charts and visualizations)
* CSS (custom styling)
## State Management

The application uses React Context API to manage global state, including:

* Transactions data
* User role (Admin/Viewer)
* Filters and search input
## Role-Based Behavior

* Viewer: Can view dashboard and transactions
* Admin: Can add new transactions

A role switcher is provided to simulate different user roles.
## How to Run

1. Clone the repository:

```bash
git clone https://github.com/kalyanchakravarthy4/finance-dashboard.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the project:

```bash
npm run dev
```

4. Open in browser:

```
http://localhost:5173
```
## Live Demo

finance-dashboard-cqcv81g8u-kalyanchakravarthy4s-projects.vercel.app
## Future Improvements

* Add transaction form instead of default values
* Add dark mode support
* Export transactions as CSV
* Backend integration with database
## Conclusion

This project demonstrates frontend development skills including UI design, state management, and data visualization by building a clean and interactive finance dashboard.

