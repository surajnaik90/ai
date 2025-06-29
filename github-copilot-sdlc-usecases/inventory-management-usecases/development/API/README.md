# Inventory Management API

A simple ASP.NET Core 8.0 API for viewing products in the inventory management system.

## Features

- Get all products endpoint
- Swagger UI for API documentation
- CORS enabled
- Error handling

## Running the API

### Prerequisites
- .NET 8.0 SDK

### Steps

1. Navigate to the API directory:
```
cd c:\Code\ai\github-copilot-sdlc-usecases\inventory-management-usecases\development\API
```

2. Run the API:
```
dotnet run
```

3. Access the Swagger UI:
```
https://localhost:7182/swagger
```
or
```
http://localhost:5214/swagger
```

## Project Structure

- **Controllers/**: Contains the ProductsController
- **Services/**: Contains service interfaces and implementations
- **Properties/**: Contains launch settings

## Implementation Notes

- This implementation focuses solely on retrieving all products
- Mock data is used instead of a database
- Advanced features like pagination, sorting, and filtering are not implemented
