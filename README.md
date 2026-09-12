# Dev Stack Builder

A modern, responsive React application that allows developers to browse and select trending technologies to build their ultimate development stack. 

## 🚀 Technologies Used
- React.js
- Tailwind CSS
- DaisyUI
- Vite
- React-Toastify

## ✨ Features
1. **Interactive Tech Stack Builder**: Users can seamlessly add and remove technologies from their personalized stack, with duplicate prevention.
2. **Responsive Design**: fully responsive layout across mobile, tablet, and desktop devices, featuring a mobile-friendly hamburger navigation.
3. **Real-time Notifications**: Integrated with React-Toastify to provide users with immediate, stylish alerts when managing their stack.

---

## 📚 React Q&A

**1. What is JSX, and why is it used in React?**
JSX stands for JavaScript XML. It's a syntax extension for JavaScript that allows you to write HTML-like markup directly inside your React components. It makes writing and understanding React UI components easier because it visually looks like HTML.

**2. What is the difference between props and state?**
Props are read-only properties passed from a parent component down to a child component to configure it. State is data managed internally within a component that can change over time, usually in response to user actions, and triggers a re-render when updated.

**3. What does the `useState` hook do, and where did you use it in this project?**
The `useState` hook allows functional components to have local state variables. In this project, I used it in `App.jsx` to store the loaded `technologies`, manage the `stack` of selected items, and track the `isLoading` status.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
The `useEffect` hook lets you perform side effects in functional components, like data fetching or DOM manipulation. I used it to load the JSON data because fetching data is an asynchronous side effect that should only happen after the component renders, not during the render phase.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` prop to identify which items in a list have changed, been added, or been removed. It helps React optimize rendering by only updating the specific DOM elements that changed rather than re-rendering the entire list.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering is the practice of rendering different UI elements based on a condition (like a boolean state). I used it in `YourStack.jsx` to either show the "Your stack is empty" message if the stack array is empty (`stack.length === 0`), or render the list of selected technologies if it has items.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
You pass data from parent to child using props (e.g., passing `tech={tech}` to `TechCard`). To send data back, the parent passes a callback function as a prop to the child (e.g., `onAdd={handleAddToStack}`). When an event occurs in the child, it calls this function, effectively sending data (like the selected tech) back to the parent.
