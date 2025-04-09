# Todo Application

## Description
A full-stack todo application that enables users to efficiently create, update, and delete tasks. It features a React-based frontend with Context API for streamlined state management, a Node.js backend, and MongoDB for reliable task storage, ensuring seamless API integration powered by Axios.

## Features
- **CRUD Operations**: Effortlessly add, edit, delete, and fetch tasks.
- **Dynamic Updates**: Real-time modifications with an intuitive user interface.
- **Interactive Components**: Includes icons and conditional rendering for a polished user experience.
- **Scalable State Management**: Centralized task handling using Context API.

- **Backend**:
  - RESTful API implemented with Express.js.
  - Todo management endpoints supported by MongoDB for data persistence.
  - CORS configuration ensures smooth interaction between the frontend and backend.

## Technologies Used
- **Frontend**: React, Context API, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Database**: MongoDB
- **UI Enhancements**: React Icons
- **Other**: CORS for cross-origin resource sharing

## API Endpoints
An overview of the backend API functionality:

| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| POST   | `/todo`        | Create a new task.   |
| GET    | `/todo`        | Fetch all tasks.     |
| GET    | `/todo/:id`    | Fetch a task by ID.  |
| PUT    | `/todo/:id`    | Update a task by ID. |
| DELETE | `/todo/:id`    | Delete a task by ID. |
