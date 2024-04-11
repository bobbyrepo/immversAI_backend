# Ticket Booking System

This Ticket Booking System.It provides RESTful APIs for handling ticket operations and utilizes Node.js with Express.js for the backend and MongoDB for data storage.

# API's

### Tickets

- **GET /api/tickets**
  - Retrieve a list of all tickets.

- **GET /api/tickets/:id**
  - Retrieve a single ticket by its ID.
  - Request parameter: id (ID of the ticket)
 
- **POST /api/tickets**
  - Create a new ticket.
  - Request body:
    - `price` (Price of the ticket)
  
- **PUT /api/tickets/:id**
  - Update an existing ticket by its ID.
  - Request parameter: id (ID of the ticket)
  - Request body:
    - `name` (Name)
    - `email` (Name)

- **DELETE /api/tickets/:id**
  - Delete a ticket by its ID.
  - Request parameter: `id` (ID of the ticket)
 
## Technologies Used

The backend of the project utilizes the following technologies:

- **Node.js with Express:** Provides the server-side framework for building RESTful APIs.

- **Database:**
  - **MongoDB:** Stores blog posts, news and user data.

Before you can run this project, you need to set up some environment variables. Create an `.env` file in the project root and add the following variables:

- `PORT`: 8000
- `MONGO_URI`: your_mongodb_connection_uri

## Usage

1. Run `git clone https://github.com/bobbyrepo/immversAI_backend` to clone the repository to your local machine.
2. Run `npm install` to install the project dependencies.
3. Run `npm start` to start the development server.
4. Open your browser and visit `http://localhost:PORT`.

  

