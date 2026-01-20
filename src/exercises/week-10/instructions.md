# Week 10: React Router & Client-Side Routing

## Exercise Objectives

Welcome to Week 10 of the React curriculum! 🎉 This week focuses ONLY on **routing and navigation** inside a React Single Page Application (SPA) using **React Router**.

Without routing, SPAs often have these problems:

- The URL does not change while navigating
- Browser back/forward buttons don't behave as users expect
- Users can't bookmark or share a link to a specific view (deep linking)

This week you will practice the key routing tools taught in the article:

- `<Routes>` and `<Route>` for route definitions
- `<Link>` and `<NavLink>` for navigation without refreshing the page
- `useParams()` for reading dynamic URL segments like `/products/:id`
- `useNavigate()` for programmatic navigation (buttons, handlers)
- `useLocation()` for showing information about the current route
- Catch-all `*` routes for 404 pages
- Protecting routes by conditionally defining them

✅ No extra app logic this week.
Your work should stay focused on routing concepts only.

---

## Scenario Details

You are building a small "Routing Demo" app:

- Header and Footer should always render (shared layout)
- The `<main>` section changes based on the URL
- The app includes a dynamic route: `/products/:id`
- The `/account` page must be protected (only exists when logged in)
- Invalid URLs should show a 404 page that displays the invalid path

---

## File Structure

You will complete all exercises using these files:

```
src/exercises/week-10/
├── instructions.md
├── studentWork.jsx
├── data/
│   └── productIds.js
├── pages/
│   ├── Home.jsx
│   ├── Checkout.jsx
│   ├── Account.jsx
│   ├── ProductDetails.jsx
│   └── NotFound.jsx
└── components/
    ├── Header.jsx
    └── Footer.jsx
```

---

## Exercise 1: Conceptual (Short Answer)

In `studentWork.jsx`, write a **3–5 sentence answer**:

**"Why is React Router useful in an SPA?"**

Your answer must mention:

- URL changes (deep links / bookmarking)
- Browser back/forward history behavior
- No full page refresh

---

## Exercise 2: Implement Routes + Shared Layout + Protected Route

In `studentWork.jsx`, implement these routes inside `<main>`:

| Path            | Component                |
| --------------- | ------------------------ |
| `/`             | Home                     |
| `/checkout`     | Checkout                 |
| `/products/:id` | ProductDetails           |
| `/account`      | Account (**protected**)  |
| `*`             | NotFound (**catch-all**) |

### Requirements

1. You must use `<Routes>` and `<Route>`
2. Header and Footer must always render
3. Protect `/account`:
   - When logged out, typing `/account` in the URL must NOT show Account
   - Implement this by conditionally defining the Account route only when logged in

---

## Exercise 3: Link vs NavLink + Active Styling

In `components/Header.jsx`:

- Use `<Link>` for internal navigation:
  - Home (`/`)
  - Checkout (`/checkout`)
- Use `<NavLink>` for Account (`/account`) so it has active styling
- Only show the Account link when logged in
- Keep the external MDN link as a normal `<a>` tag

---

## Exercise 4: Dynamic Route + useParams()

In `pages/ProductDetails.jsx`:

- Use `useParams()` to read `id` from the URL
- Display the `id` value in the UI
- Add a Link back to Home

✅ No product lookup required in this week's exercises.
Focus only on using the routing feature.

---

## Exercise 5: useNavigate + useLocation + 404 Support

### Part A — Programmatic Navigation (Checkout)

In `pages/Checkout.jsx`:

- Use `useNavigate()`
- Add a "Go Home" button that calls `navigate('/')`
- Add a "Back" button that calls `navigate(-1)`

### Part B — NotFound Displays Invalid Path

In `pages/NotFound.jsx`:

- Use `useLocation()` to get the current path
- Display the invalid path in the UI
- Include a Link back Home

---

## Assessment Criteria

### Exercise 1

- Answer is 3–5 sentences
- Mentions URL changes + deep linking
- Mentions browser history behavior (back/forward)
- Mentions no page refresh

### Exercise 2

- All routes are implemented correctly
- Shared layout works: Header/Footer always visible
- Protected route works: `/account` is not accessible when logged out
- Catch-all route shows NotFound for unknown paths

### Exercise 3

- Link is used for internal navigation
- NavLink is used for Account navigation
- Active styling is visible for Account route
- Account link does not appear when logged out

### Exercise 4

- `useParams()` is used correctly
- ProductDetails displays the URL `id`
- Link back to Home works

### Exercise 5

- `useNavigate()` works for both `/` and `-1`
- `useLocation()` displays the invalid path
- 404 route works through `path="*"`

---

## Reminders

- React Router enables client-side navigation without page reloads
- URLs should change when moving between "pages" in your SPA
- Browser back/forward should work when routing is set up correctly
- `useParams()` always returns strings
- `navigate(-1)` is equivalent to the browser back button
- A catch-all `*` route prevents blank screens for bad URLs
