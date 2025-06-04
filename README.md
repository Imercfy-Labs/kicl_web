# Tech Kothari Portal

A comprehensive portal for managing sales, inventory, field development, and user management built with Angular.

## Prerequisites

- Node.js (v18 or higher)
- NPM (v9 or higher)

## Getting Started

Follow these steps to get the application running on your local machine:

1. **Clone the Repository**

```bash
git clone <repository-url>
cd tech-kothari-portal
```

2. **Install Dependencies**

```bash
npm install
```

3. **Start Development Server**

```bash
npm run dev
```

The application will be available at `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── core/           # Core functionality (guards, services)
│   ├── features/       # Feature modules
│   ├── shared/         # Shared components
│   ├── app.component.ts
│   └── app.routes.ts
├── assets/            # Static assets
└── styles/           # Global styles
```

## Features

- **Dashboard**: Overview of key metrics and activities
- **Sales Officer Tracker**: Track and manage sales officer activities
- **Inventory Management**: Manage product inventory
- **Order Management**: Handle customer orders
- **Invoice Management**: Generate and manage invoices
- **Field Development**: Track field activities and development
- **User Management**: Manage user roles and permissions

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build the application for production
- `npm start`: Start the application

## Environment Setup

The application requires the following environment variables:

- Google Maps API Key (for maps functionality)
- Authentication configuration

## Authentication

The application uses a built-in authentication system with:
- Email/Password login
- User registration
- Password recovery

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

This project is proprietary software. All rights reserved.