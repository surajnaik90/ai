# Electronics Inventory Application

This is a migrated version of the PHP Electronics Inventory application, now implemented as a modern ASP.NET Core solution with a clean separation of concerns:

1. **ElectronicsInventory.API** - Backend REST API service
2. **ElectronicsInventory.Web** - Frontend Razor Pages web application

## Project Structure

```
ElectronicsInventory/
├── ElectronicsInventory.API/          # Backend API service
│   ├── Controllers/                   # API endpoints
│   ├── Models/                        # Data models
│   └── Services/                      # Business logic
│
└── ElectronicsInventory.Web/          # Frontend application
    ├── Models/                        # View models
    ├── Pages/                         # Razor Pages
    ├── Services/                      # API client services
    └── wwwroot/                       # Static assets (CSS, JavaScript)
```

## Features

- Displays a sortable inventory table of electronic items
- Calculates and displays totals (quantity and value)
- Clean separation between backend API and frontend UI
- Modern responsive design using Bootstrap

## Running the Application

To run the application, you need to start both projects:

### Starting the API

```powershell
cd ElectronicsInventory\ElectronicsInventory.API
dotnet run
```

The API will be accessible at https://localhost:5000, with Swagger documentation at https://localhost:5000/swagger.

### Starting the Web Application

```powershell
cd ElectronicsInventory\ElectronicsInventory.Web
dotnet run
```

The web application will be accessible at https://localhost:5001.

## Technology Stack

- **Backend**: ASP.NET Core API with .NET 8.0
- **Frontend**: ASP.NET Core Razor Pages with .NET 8.0
- **CSS Framework**: Bootstrap 5
- **HTTP Client**: HttpClient with DI for API communication

## Migration Notes

This application is a migration from a PHP-based application with the following improvements:

1. Separated concerns between frontend and backend
2. Added server-side sorting capabilities
3. Improved error handling
4. Enhanced UI with Bootstrap
5. Added Swagger for API documentation
