# Project Plan

## 1. Objective
Build a portfolio-ready support ticketing and operations dashboard called SupportAssist, aligned to the PRD and designed to showcase product thinking, frontend design, backend architecture, and operational analytics.

## 2. Project Strategy
This project will be implemented as a full-stack application with a clear MVP focus:
- Frontend: React + TypeScript dashboard and case management UI
- Backend: Node.js / Express or NestJS API service
- Database: PostgreSQL
- Authentication: JWT or session-based auth
- Deployment: Docker + optional cloud hosting

The focus is to deliver a strong MVP that demonstrates a real business workflow rather than a generic CRUD app.

## 3. Scope for MVP
### Core Features
- user sign-up/sign-in
- role-based access for agents, managers, and admins
- create, edit, assign, and close support cases
- search and filter cases
- case prioritization and severity levels
- SLA tracking with escalation indicators
- dashboard with open, overdue, and resolved metrics
- notes and activity history for each ticket
- basic reporting and export-ready summaries

### Exclusions for initial release
- advanced AI automation
- large-scale omnichannel integrations
- full customer self-service portal
- enterprise-grade analytics suite

## 4. Phase-wise Roadmap

### Phase 1: Foundation
- define project structure and tech stack
- create repository skeleton and CI setup
- implement auth and basic user roles
- setup database schema and migrations
- create base UI shell and navigation

### Phase 2: Core Product Workflow
- build case creation and detail pages
- implement assignment workflow and status lifecycle
- add filtering, search, and comments
- add SLA timers and escalation display
- build dashboard cards and summary widgets

### Phase 3: Reporting and UX
- add reporting pages and trend metrics
- improve dashboard UX for managers and admins
- add validation, loading states, and error handling
- optimize mobile responsiveness and accessibility

### Phase 4: Portfolio Polish
- complete README and architecture docs
- add deployment setup
- improve visual quality and demo flow
- perform final testing and cleanup
- prepare GitHub portfolio narrative

## 5. Detailed Task Breakdown

### Frontend Tasks
- create landing page and app shell
- implement login and protected routes
- design case list, filters, and actions
- build case detail view with timeline and notes
- build dashboard widgets for queue and SLA insights
- implement admin configuration screens

### Backend Tasks
- create REST API for auth and users
- build ticket CRUD endpoints
- add assignment and SLA logic
- create activity logging for ticket updates
- handle notifications and escalation events
- design reporting queries for metrics

### Data Model Tasks
- users
- roles
- teams
- customers
- tickets
- ticket comments
- ticket attachments
- SLA rules
- notifications
- audit log / activity history

## 6. Suggested Database Schema
### Users
- id
- name
- email
- password_hash
- role_id
- team_id
- created_at

### Tickets
- id
- title
- description
- customer_id
- assigned_to
- team_id
- priority
- severity
- status
- created_at
- updated_at
- resolved_at
- sla_deadline

### Tickets Activity
- id
- ticket_id
- actor_id
- action
- old_value
- new_value
- created_at

### SLA Rules
- id
- priority
- response_time_hours
- resolution_time_hours
- escalation_threshold

## 7. Technical Architecture
### Frontend Layer
- React app with reusable components
- dashboard pages and forms
- state management via React Query or Redux Toolkit
- API integration and validation

### Backend Layer
- Express or NestJS REST API
- service layer for ticket logic, auth, reporting
- role-based guards and middleware
- error handling and audit logging

### Data Layer
- PostgreSQL for transactional data
- structured schema for tickets, users, and workflow metadata
- reporting queries for SLA and operational monitoring

### DevOps Layer
- Docker Compose for local development
- environment variable configuration
- CI pipeline for lint/test/build validation

## 8. Risks and Mitigation
### Risk: too much scope
Mitigation: keep MVP limited to ticketing, roles, SLA, and dashboard basics.

### Risk: weak portfolio narrative
Mitigation: focus on a real-world business workflow and document the problem clearly.

### Risk: complexity in workflow logic
Mitigation: implement the safest core flows first and add automation later.

### Risk: poor UX for support agents
Mitigation: prioritize task speed and simple case interaction patterns.

## 9. Definition of Done
The project is ready for GitHub when:
- MVP features are complete and validated
- frontend and backend integrate successfully
- authentication and role logic work correctly
- dashboard displays useful operational metrics
- README and project docs are polished
- demo instructions are clear for recruiters or hiring managers

## 10. Suggested Portfolio Story
This project should tell a compelling story:
> I built a support operations platform that helps organizations manage tickets, SLAs, team workloads, and reporting from a single system. The project demonstrates real product thinking, workflow design, and implementation of a practical business dashboard.

## 11. Recommended Next Step
Start by creating the base application skeleton, then implement authentication, user roles, and ticket data model before building the dashboard and reporting views.
