# University-Resource-Booking-System

An advanced, type-safe University Resource Booking System built with **TypeScript** and **Node.js**. This project demonstrates the practical application of object-oriented programming, modern JavaScript/TypeScript array transformations, generics, and strict type management.

---

## 🚀 Features

*   **Generic Entity Management:** A reusable `EntityManager<T>` class utilizing basic CRUD functions to manage core system entities dynamically.
*   **Strict Type-Safety:** Leverages advanced TypeScript utility types (`Omit`, `Partial`) to build strictly validated input and update structures (`NewBookingInput`, `UpdateBookingInput`).
*   **Modern Data Transformations:** Efficient data processing using modern array techniques like `.map()`, `.filter()`, and `.reduce()`.
*   **Detailed Analytics & Reporting:** Built-in calculation functions for approved booking hours and auto-generated cross-referenced summary reports.

---

## 🛠️ Project Architecture

The project structure is organized as follows:

```text
University Resource Booking System/
├── dist/                  # Compiled JavaScript files
├── src/                   # TypeScript source files
│   ├── Booking.ts         # Booking types, interfaces, and enums
│   ├── Resource.ts        # Resource types and models
│   ├── manager.ts         # Generic EntityManager class
│   ├── Service.ts         # Core business logic & array methods
│   └── index.ts           # Entry point / Simulation script
├── tsconfig.json          # TypeScript compiler configurations
└── README.md              # Project documentation

## 💻 Tech Stack & Configurations

* **Language:** TypeScript (Strict Mode Enabled `strict: true`)
* **Environment Settings:** Target: `ESNext` | Module: `NodeNext`
* **Module Resolution:** Formatted with `verbatimModuleSyntax: false` for seamless structural type-only imports evaluation.

---
## 🏃‍♂️ Getting Started

### 1. Installation
Clone or navigate to the project directory and install the required development tools:
```bash
npm install
```

### 2. Compilation (Watch Mode)
To let the TypeScript compiler automatically watch and build your code files inside the `dist` directory:
```bash
npx tsc --watch
```

### 3. Run the Simulation
Open a separate terminal window and execute the compiled JavaScript entry file using Node.js:
```bash
node dist/index.js
```

---

## 📊 Sample Simulation Output

Upon running the system simulation, the console outputs sequentially generated system reports:

```text
[REPORT] Total Cumulative Hours for Approved Bookings: 2 hours.

[REPORT] Booking Summary:
- Booking ID: 412.532 | User: alaa@gmail.com | Resource Name: Main AI Lab
- Booking ID: 785.143 | User: alaa@yahoo.com | Resource Name: Hall 1
```
