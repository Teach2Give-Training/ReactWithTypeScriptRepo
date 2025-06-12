# What is useEffect?

A Hook to run side effects in your components

Examples: API calls, subscriptions, DOM manipulation, timers

# Basic Syntax of useEffect

```
useEffect(() => {
  // side effect code
}, [dependencies]);

```

# When useEffect Runs

On initial render

On dependency change

Not on unmounted components (unless using cleanup)

# useEffect Example: Data Fetching

```
useEffect(() => {
  fetch('/api/users')
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);

```

# Adding Cleanup to useEffect

```
useEffect(() => {
  const interval = setInterval(() => {
    console.log('Tick');
  }, 1000);

  return () => clearInterval(interval);
}, []);

```

# Common Mistakes to Avoid

Forgetting dependency array (runs on every render!)

Including stale state

Not cleaning up listeners or intervals

# Exercise: Clock App with useEffect

Create a component that displays current time

Update it every second using `setInterval`

Clean up interval on unmount

# Summary

useEffect handles side effects in function components

Dependency array controls execution

Cleanup prevents memory leaks
