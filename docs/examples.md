# Examples

This page contains practical examples to help you understand common usage patterns.

## Basic Usage

### Creating a Simple Component

Here's how to create a basic React component:

```jsx
import React from 'react';

function Welcome({ name }) {
  return (
    <div className="welcome-container">
      <h1>Hello, {name}!</h1>
      <p>Welcome to our application.</p>
    </div>
  );
}

export default Welcome;
```

### Using Hooks

Example of using React hooks for state management:

```jsx
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

## Advanced Patterns

### Custom Hook for Data Fetching

Create reusable logic with custom hooks:

```jsx
import { useState, useEffect } from 'react';

function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('API request failed');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage
function ProductList() {
  const { data: products, loading, error } = useApi('/api/products');

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
```