## What is React Hook Form?

React Hook Form is a popular library for managing forms in React. It makes form validation, data collection, and error handling simple and efficient, using React hooks.

## How Does It Work?

1. **useForm Hook:**
   You use the `useForm` hook to set up your form. This hook gives you methods and objects to register inputs, handle form submission, and track errors.
2. **Registering Inputs:**
   Each input field is registered using the `register` function. This connects the field to React Hook Form so it can track its value and validation.
3. **Validation:**
   You can add validation rules (like `required`) directly when registering each input. Errors are automatically tracked and can be displayed in the UI.
4. **Handling Submission:**
   The `handleSubmit` function wraps your submit handler. When the form is valid, your handler receives the form data.
5. **Error Handling:**
   The `formState.errors` object contains any validation errors, which you can display next to the relevant input.

## Why Use React Hook Form?

* **Less Boilerplate:** No need to manage input state manually.
* **Easy Validation:** Built-in validation and error handling.
* **Performance:** Minimal re-renders for better performance.
* **Simple Integration:** Works with all input types and custom components.

## Installation

```
pnpm add react-hook-form
```


## Schema Validation

**Step 1:** Install `Yup` into your project.

```
pnpm add @hookform/resolvers yup
```
