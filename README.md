# CampusHub

**University Event & Student Activity Management System**

CampusHub is a full-stack starter project that lets students discover clubs, register for
events, read announcements, and leave feedback. This repository contains only the project
**scaffolding** — folder structure, entities, placeholder endpoints, and a basic React UI —
so a team of six can pick it up and start building features right away.

> This is a starter project. No business logic has been implemented yet — that's for the
> development team to build out (see [Team Responsibilities](#team-responsibilities) below).

---

## Tech Stack

**Backend**
- Java 17
- Spring Boot 3
- Maven
- Spring Data JPA
- MySQL

**Frontend**
- React
- React Router
- Axios
- Plain CSS

**Authentication**
- Kept intentionally simple: a `role` field (`ADMIN` / `STUDENT`) on the `User` entity, plus
  Login and Register pages.
- No Spring Security, JWT, OAuth, email verification, or refresh tokens — add these later if
  the assignment requires them.

---

## Project Structure

```
CampusHub
├── backend/               Spring Boot API (Java 17, Maven, JPA, MySQL)
├── frontend/               React app (pages, components, routes, API client)
├── database/
│   ├── schema.sql          Table definitions + foreign keys
│   └── sample_data.sql     Sample rows for local development
├── README.md
└── .gitignore
```

### Backend package layout
```
com.campushub
├── config          # CORS config, etc.
├── controller      # REST controllers (placeholder endpoints only)
├── dto             # Data Transfer Objects
├── entity          # JPA entities
├── repository      # Spring Data JPA repositories
├── service         # Service interfaces
│   └── impl        # Placeholder service implementations
├── util            # Shared constants/helpers
└── exception       # Custom exceptions + global exception handler
```

### Frontend folder layout
```
src
├── components   # Navbar, Sidebar, Footer, Button, Card, Table
├── pages        # Home, Login, Register, Dashboard, Clubs, Events,
│                # Registrations, Announcements, Feedback, NotFound
├── routes       # React Router configuration
├── api          # Axios instance + one API module per resource
├── styles       # Global CSS
└── assets       # Images / static assets
```

---

## Getting Started

### 1. Database
1. Install MySQL locally (or use a container).
2. Run the schema, then the sample data:
   ```bash
   mysql -u root -p < database/schema.sql
   mysql -u root -p < database/sample_data.sql
   ```
3. Update credentials in `backend/src/main/resources/application.properties` if needed.

### 2. Backend
```bash
cd backend
mvn spring-boot:run
```
The API will start on **http://localhost:8080**, with endpoints under `/api/...`.

### 3. Frontend
```bash
cd frontend
npm install
npm start
```
The app will start on **http://localhost:3000** and expects the API at
`http://localhost:8080/api` (configurable via `REACT_APP_API_BASE_URL`).

---

## API Endpoints (placeholder)

All controllers currently return empty/placeholder data — wire up real logic in each
`*ServiceImpl` class.

| Resource        | Base path              | Methods                |
|-----------------|-------------------------|-------------------------|
| Users           | `/api/users`            | GET, POST, PUT, DELETE |
| Clubs           | `/api/clubs`            | GET, POST, PUT, DELETE |
| Events          | `/api/events`           | GET, POST, PUT, DELETE |
| Registrations   | `/api/registrations`    | GET, POST, PUT, DELETE |
| Announcements   | `/api/announcements`    | GET, POST, PUT, DELETE |
| Feedback        | `/api/feedback`         | GET, POST, PUT, DELETE |

---

## Database Tables

`users`, `clubs`, `club_members`, `events`, `registrations`, `announcements`, `feedback` —
all defined with foreign keys in `database/schema.sql`.

---

## Team Responsibilities

| Member    | Area                                   |
|-----------|-----------------------------------------|
| Member 1  | Project setup, coordination, integration |
| Member 2  | User Management                         |
| Member 3  | Club Management                         |
| Member 4  | Event Management                        |
| Member 5  | Registration                            |
| Member 6  | Announcements, Feedback, Reports        |

Each member should implement the logic inside their corresponding `ServiceImpl` class(es),
connect the matching frontend page(s) to the API via the `src/api` modules, and replace
placeholder content with real UI.

---

## Notes for the Team

- Keep controllers thin — business logic belongs in the service layer.
- DTOs are provided so entities are never exposed directly over the API; add mapping logic
  (manually, or with MapStruct/ModelMapper if you prefer) inside the service implementations.
- `spring.jpa.hibernate.ddl-auto=update` is enabled for convenience during development —
  consider switching to `validate` once the schema stabilizes.
- This project intentionally excludes authentication frameworks to keep the assignment
  scope manageable. If your assignment requires proper security, discuss as a team before
  adding Spring Security/JWT.
