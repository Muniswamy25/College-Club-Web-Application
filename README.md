College Club Web Application

  A full-stack web application built for managing college clubs, events, gallery, and member activities. 
  The app supports event listing, student registration, club joining, and admin controls through a clean frontend and a secure backend.

---
 Project Structure:

## Features

### For Students
- View upcoming events (fetched from backend MongoDB)
- View event details
- Register for events using a form
- Join various clubs
- Submit contact messages to admin
  
### For Admin
- Secure login with email/password
- Add new events (title, date, description, image)
- View all registrations, new joinees, and messages
- Logout functionality

### Frontend
- HTML5, CSS3, Bootstrap 5
- JavaScript

### Backend
- Node.js, Express.js
- MongoDB with Mongoose
- Session handling (express-session)
- CORS enabled
- REST API architecture

---

## MongoDB Collections

| Collection      | Description                                      |
|-----------------|--------------------------------------------------|
| events          | Event details: title, date, description, image   |
| registrations   | Stores student registration data                 |
| clubs           | Stores club join data                            |
| contacts        | Contact form submissions                         |


-------------------------------------------------------------------------------------------------------------------------------------------------------

Github link:- https://github.com/Muniswamy25/College-Club-Web-Application.git
