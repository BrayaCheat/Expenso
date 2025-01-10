# Expenso (Expense App - 2025)

## Overview
Expenso is a modern expense tracking app designed to simplify personal finance management. Built using cutting-edge technologies, Expenso offers seamless user experience, robust data management, and insightful analytics to help users make better financial decisions.

## Tech Stacks

- **Nuxt.js**: Framework for building the application.
- **Prisma ORM**: Database toolkit for seamless interaction with databases.
- **Supabase**: Backend service for authentication, storage, and database management.
- **Vercel**: Deployment platform for global scalability and CI/CD.

## Work Flow

### **User Authentication**
- Users sign up or log in via **Supabase Authentication**.
- Secured sessions are established for accessing personalized data.

### **Dashboard Overview**
- After authentication, users are directed to a dashboard.
- The dashboard fetches expense data via API calls, displaying insights such as total expenses, categories, and recent transactions.

### **Add Expense**
- Users input expense details, including:
  - Amount
  - Category
  - Date
  - Optional notes
- Data is sent to the backend using **Prisma ORM**, which writes to the **Supabase Database**.

### **View/Edit Expenses**
- Users can browse and filter their expenses.
- Edit functionality allows updates to existing records, processed and saved via Prisma.

### **Delete Expense**
- Users can delete an entry.
- The app triggers a database operation to remove the selected expense.

### **Insights & Reports**
- Dynamic charts and summaries are rendered using Nuxt.js.
- Aggregated data is fetched from the database for category-based and date-based analysis.

### **Sync and Security**
- Data is synced in real-time with **Supabase**, ensuring updates are visible across devices.
- Secure API calls and authentication tokens ensure user data safety.

## Architecture

```plaintext
                   +------------------------+
                   |      Client (UI)       |
                   |      Nuxt.js App       |
                   +------------------------+
                              |
                              v
                   +------------------------+
                   |    API Gateway Layer   |
                   |  (Nuxt.js Backend)     |
                   +------------------------+
                              |
                              v
        +--------------------------------------------------+
        |              Backend Services (Supabase)         |
        |   - Authentication                               |
        |   - Storage                                      |
        |   - Database API                                 |
        +--------------------------------------------------+
                              |
                              v
                   +------------------------+
                   |       Prisma ORM       |
                   |   (Database Access)    |
                   +------------------------+
                              |
                              v
                   +------------------------+
                   |   PostgreSQL Database  |
                   |    (Managed by Supabase)|
                   +------------------------+
                              ^
                              |
                   +------------------------+
                   |   Deployment Platform  |
                   |        Vercel          |
                   |  (Global CDN, CI/CD)   |
                   +------------------------+
```

## Deployment
The app is deployed on **Vercel**, offering global availability and automatic continuous integration/deployment (CI/CD) pipelines. Changes pushed to the GitHub repository are automatically deployed to the production environment.

## Features
- Secure user authentication with Supabase.
- Intuitive dashboard with real-time expense tracking.
- Add, edit, and delete expenses effortlessly.
- Generate insightful reports with dynamic charts.
- Real-time data sync across devices.
- Deployed on a robust, scalable platform with global CDN.

---

For contributions or issues, feel free to raise a pull request or open an issue in the repository.

