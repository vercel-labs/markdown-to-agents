# API Reference

This document provides detailed information about the available API endpoints and methods.

## Authentication

All API requests require authentication using an API key:

```javascript
const response = await fetch('/api/data', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});
```

## Endpoints

### GET /api/users

Retrieve a list of users.

**Parameters:**
- `page` (optional): Page number for pagination
- `limit` (optional): Number of items per page

**Response:**
```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25
  }
}
```

### POST /api/users

Create a new user.

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com"
}
```

**Response:**
```json
{
  "id": 2,
  "name": "Jane Smith",
  "email": "jane@example.com",
  "created_at": "2023-01-01T00:00:00Z"
}
```