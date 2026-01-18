<<<<<<< HEAD

---

# 📄 Contract Management Platform (Frontend)

## Overview

This project is a **frontend-only Contract Management Platform** built from scratch as part of the given assignment.
It demonstrates **product thinking, clean UI flow, state management, and controlled contract lifecycle handling** without relying on any backend or predefined designs.

The application allows users to:

* Create reusable **contract blueprints**
* Generate **contracts from blueprints**
* Fill contract data
* Manage contracts through a **strict lifecycle**
* View and filter contracts in a dashboard

All data is stored using **mocked persistence**.

---

## Objective (As per Task)

> Build a frontend-based Contract Management Platform that demonstrates product thinking, UI design, state management, and clean code architecture.

No backend or UI designs were provided, and all design and architectural decisions were made independently .

---
---

## Setup Instructions

1. Clone the repository

   ```bash
   git clone https://github.com/vivekgit15/eurusys-cms.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run the application

   ```bash
   npm run dev
   ```

4. Open in browser

   ```
   http://localhost:5173
   ```

---


## Tech Stack

* **React (with Vite)** – fast development and modern tooling
* **JavaScript** – used for quicker implementation within time constraints
* **React Router** – client-side routing
* **React Context + useReducer** – predictable global state management
* **Tailwind CSS** – clean, consistent, utility-based UI styling
* **localStorage** – mocked persistence (no backend)

### Why this stack?

* React Context + reducer enforces **controlled state transitions**
* Tailwind allows rapid UI iteration while keeping styles consistent
* localStorage simulates persistence without backend complexity

---

## Functional Requirements Implementation

### 1. Blueprint Creation

A **Blueprint** represents a reusable contract template.

**Implemented features:**

* Create a blueprint with configurable fields
* Supported field types:

  * Text
  * Date
  * Signature
  * Checkbox
* Field metadata stored:

  * Type
  * Label
  * Position (X, Y)
* At least **one field is required by default**
* Blueprints are **immutable once created**

**Positioning:**

* X and Y values are stored as metadata
* Fields are rendered sequentially (basic positioning)
* Data model supports future visual placement (drag-and-drop)

Blueprint data is stored using mocked persistence via `localStorage` .

---

### 2. Contract Creation from Blueprint

* Select an existing blueprint
* Generate a contract from it
* All blueprint fields are **cloned** into the contract
* Each contract maintains its own field values
* Blueprint structure remains unchanged

This ensures:

* One blueprint → many contracts
* No cross-contract side effects

---

### 3. Contract Lifecycle Management

Each contract strictly follows the lifecycle:

```
Created → Approved → Sent → Signed → Locked
Revoked (can occur after Created or Sent)
```

**Rules enforced:**

* No skipping lifecycle steps
* Only valid transitions are allowed
* Locked contracts cannot be edited
* Revoked contracts cannot proceed further
* UI clearly shows current status and valid actions

Lifecycle rules are enforced centrally in the reducer logic, ensuring correctness .

---

### 4. Contract Listing Dashboard

* Displays contracts in a table view
* Includes:

  * Contract name
  * Blueprint name
  * Status (with visual indicator)
  * Created date
  * View action
* Filtering supported:

  * All
  * Active
  * Signed

The dashboard serves as the primary entry point of the application.

---

## UI & UX Design Decisions

* No design assets were provided; UI was designed from scratch
* Focus placed on:

  * Clarity
  * Logical flow
  * Usability
* Visual polish kept clean and professional without over-engineering
* Tailwind CSS used for consistency and maintainability
* Reusable components:

  * Buttons
  * Status badges
  * Back navigation

---

## State Management & Architecture

* Global state managed using **React Context + useReducer**
* Reducer is the **single source of truth**
* UI components dispatch actions only
* All lifecycle and validation rules are centralized
* Derived UI state (filters, errors) handled locally

This approach avoids unpredictable mutations and keeps logic maintainable.

---

## Mocked Persistence

Since no backend was required, **localStorage** is used to simulate persistence:

* Application state is loaded on startup
* State updates are saved automatically
* Data persists across refreshes

This mimics real backend behavior while keeping the app frontend-only.

---

## Folder Structure

```
src/
├── components/
│   ├── common/
│   ├── blueprint/
│   ├── contract/
├── context/
├── pages/
├── constants/
├── utils/
├── App.jsx
```

This structure enforces separation of concerns and improves readability.

---

## Assumptions

* Single-user system (no authentication)
* All blueprint fields are required
* Blueprints cannot be edited or deleted once created
* Signature field is represented as text input
* Position metadata is stored but not visually rendered

---

## Limitations

* No backend or database
* No drag-and-drop positioning
* No role-based access
* No unit tests (time constraints)

These are acknowledged trade-offs given the assignment scope.

## Evaluation Readiness

This project satisfies all **functional requirements**, avoids broken flows, and adheres to the architectural expectations outlined in the task description .


=======

---

# 📄 Contract Management Platform (Frontend)

## Overview

This project is a **frontend-only Contract Management Platform** built from scratch as part of the given assignment.
It demonstrates **product thinking, clean UI flow, state management, and controlled contract lifecycle handling** without relying on any backend or predefined designs.

The application allows users to:

* Create reusable **contract blueprints**
* Generate **contracts from blueprints**
* Fill contract data
* Manage contracts through a **strict lifecycle**
* View and filter contracts in a dashboard

All data is stored using **mocked persistence**.

---

## Objective (As per Task)

> Build a frontend-based Contract Management Platform that demonstrates product thinking, UI design, state management, and clean code architecture.

No backend or UI designs were provided, and all design and architectural decisions were made independently .

---

## Tech Stack

* **React (with Vite)** – fast development and modern tooling
* **JavaScript** – used for quicker implementation within time constraints
* **React Router** – client-side routing
* **React Context + useReducer** – predictable global state management
* **Tailwind CSS** – clean, consistent, utility-based UI styling
* **localStorage** – mocked persistence (no backend)

### Why this stack?

* React Context + reducer enforces **controlled state transitions**
* Tailwind allows rapid UI iteration while keeping styles consistent
* localStorage simulates persistence without backend complexity

---

## Functional Requirements Implementation

### 1. Blueprint Creation

A **Blueprint** represents a reusable contract template.

**Implemented features:**

* Create a blueprint with configurable fields
* Supported field types:

  * Text
  * Date
  * Signature
  * Checkbox
* Field metadata stored:

  * Type
  * Label
  * Position (X, Y)
* At least **one field is required by default**
* Blueprints are **immutable once created**

**Positioning:**

* X and Y values are stored as metadata
* Fields are rendered sequentially (basic positioning)
* Data model supports future visual placement (drag-and-drop)

Blueprint data is stored using mocked persistence via `localStorage` .

---

### 2. Contract Creation from Blueprint

* Select an existing blueprint
* Generate a contract from it
* All blueprint fields are **cloned** into the contract
* Each contract maintains its own field values
* Blueprint structure remains unchanged

This ensures:

* One blueprint → many contracts
* No cross-contract side effects

---

### 3. Contract Lifecycle Management

Each contract strictly follows the lifecycle:

```
Created → Approved → Sent → Signed → Locked
Revoked (can occur after Created or Sent)
```

**Rules enforced:**

* No skipping lifecycle steps
* Only valid transitions are allowed
* Locked contracts cannot be edited
* Revoked contracts cannot proceed further
* UI clearly shows current status and valid actions

Lifecycle rules are enforced centrally in the reducer logic, ensuring correctness .

---

### 4. Contract Listing Dashboard

* Displays contracts in a table view
* Includes:

  * Contract name
  * Blueprint name
  * Status (with visual indicator)
  * Created date
  * View action
* Filtering supported:

  * All
  * Active
  * Signed

The dashboard serves as the primary entry point of the application.

---

## UI & UX Design Decisions

* No design assets were provided; UI was designed from scratch
* Focus placed on:

  * Clarity
  * Logical flow
  * Usability
* Visual polish kept clean and professional without over-engineering
* Tailwind CSS used for consistency and maintainability
* Reusable components:

  * Buttons
  * Status badges
  * Back navigation

---

## State Management & Architecture

* Global state managed using **React Context + useReducer**
* Reducer is the **single source of truth**
* UI components dispatch actions only
* All lifecycle and validation rules are centralized
* Derived UI state (filters, errors) handled locally

This approach avoids unpredictable mutations and keeps logic maintainable.

---

## Mocked Persistence

Since no backend was required, **localStorage** is used to simulate persistence:

* Application state is loaded on startup
* State updates are saved automatically
* Data persists across refreshes

This mimics real backend behavior while keeping the app frontend-only.

---

## Folder Structure

```
src/
├── components/
│   ├── common/
│   ├── blueprint/
│   ├── contract/
├── context/
├── pages/
├── constants/
├── utils/
├── App.jsx
```

This structure enforces separation of concerns and improves readability.

---

## Assumptions

* Single-user system (no authentication)
* All blueprint fields are required
* Blueprints cannot be edited or deleted once created
* Signature field is represented as text input
* Position metadata is stored but not visually rendered

---

## Limitations

* No backend or database
* No drag-and-drop positioning
* No role-based access
* No unit tests (time constraints)

These are acknowledged trade-offs given the assignment scope.

---

## Setup Instructions

1. Clone the repository

   ```bash
   git clone https://github.com/vivekgit15/eurusys-cms.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run the application

   ```bash
   npm run dev
   ```

4. Open in browser

   ```
   http://localhost:5173
   ```

---

## Evaluation Readiness

This project satisfies all **functional requirements**, avoids broken flows, and adheres to the architectural expectations outlined in the task description .

---
>>>>>>> 605d4fe (some improvements have done)
