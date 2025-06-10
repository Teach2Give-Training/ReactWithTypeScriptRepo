The `useReducer` hook is a React hook for managing more complex state logic, especially when state depends on previous values or involves multiple sub-values (like objects or arrays). It’s similar to `useState`, but uses a reducer function to update state based on actions—just like Redux, but local to your component.


### **How `useReducer` Works**

* **Reducer function:** A function that takes the current state and an action, and returns the new state.
* **Dispatch:** A function to send actions to the reducer.

Let’s build a counter with increment, decrement, and reset using `useReducer`:


**Key Points:**

* `useReducer(reducer, initialState)` returns `[state, dispatch]`.
* The reducer function decides how to update state based on the action.
* Use `dispatch({ type: 'something' })` to trigger state changes.
