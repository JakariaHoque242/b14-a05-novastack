# NovaStack - Development Stack Builder

A modern, interactive web application that helps developers explore and build their ideal technology stack for their next big project. Users can browse through various frontend, backend, database, and DevOps technologies and seamlessly add them to their personal stack.

## Technology Used
- **React.js** (Core UI library)
- **Tailwind CSS** (For rapid, modern styling)
- **DaisyUI** (Tailwind CSS component library)
- **Vite** (Next-generation frontend tooling)
- **React-Toastify** (For interactive toast notifications)

## Top 3 Features
1. **Interactive Stack Builder:** Browse a curated list of technologies and add them to your personalized "Your Stack" sidebar with a single click.
2. **Beautiful & Responsive UI:** Fully responsive design featuring a modern deep-blue neon theme, ensuring a seamless experience across desktop, tablet, and mobile devices.
3. **Smart Validation:** Prevents duplicate additions to your stack with real-time toast notifications, and provides a one-click option to clear your entire stack.

---

## React Questions & Answers

**1. What is JSX, and why is it used in React?**
JSX stands for JavaScript XML. It is a syntax extension for React that allows us to write HTML-like code directly inside our JavaScript files. It is used because it makes writing UI components much easier, more readable, and helps React clearly understand what the DOM should look like.

**2. What is the difference between props and state?**
`props` (short for properties) are used to pass data from a parent component down to a child component, and they are read-only (immutable). `state`, on the other hand, is internal memory managed within a component itself, and it can be updated or changed over time by that component.

**3. What does the useState hook do, and where did you use it in this project?**
The `useState` hook allows us to add state (dynamic data) to functional components. In this project, I used `useState` in `App.jsx` to store the loaded `technologies` array, keep track of the items added to the `stack`, and manage the `isLoading` spinner state.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
The `useEffect` hook allows us to perform side effects in our components, like fetching data, manually changing the DOM, or setting timers. I needed it to load the JSON data because fetching data is an asynchronous side effect that should only happen once when the component first mounts, rather than running every time the component re-renders.

**5. Why does every item in a .map() list need a unique key prop?**
React uses the `key` prop to identify which specific items in a list have changed, been added, or been removed. Providing a unique key helps React optimize performance by only updating the exact DOM elements that changed, rather than re-rendering the entire list.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering is the process of displaying different UI elements based on certain conditions or states (like an `if-else` statement). In this project, I used it in the "Your Stack" section: if the stack array is empty, it shows an "empty message" layout; otherwise, it maps through and renders the selected technology items.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Data is passed from a parent to a child component using `props`. To send data back from a child to a parent, the parent must pass a callback function as a prop to the child. The child then calls that function, passing the necessary data as an argument, which updates the parent's state.
