# Items API

A REST API built with ASP.NET Core for managing items with properties: ID, Description, Quantity, and Cost.

## Features

- **GET /api/items** - Get all items

## Getting Started

### Prerequisites

- .NET 8.0 SDK or later

### Running the Application

1. Navigate to the project directory:
   ```
   cd dotnet-core
   ```

2. Restore dependencies:
   ```
   dotnet restore
   ```

3. Run the application:
   ```
   dotnet run
   ```

4. Open your browser and navigate to `http://localhost:5000` or `https://localhost:5001` to access the Swagger UI.

## API Documentation

The API includes Swagger documentation available at the root URL when running in development mode.

### Sample Data

The API comes pre-loaded with sample items:
- Laptop (Qty: 10, Cost: $999.99)
- Mouse (Qty: 50, Cost: $29.99)
- Keyboard (Qty: 30, Cost: $79.99)
- Monitor (Qty: 15, Cost: $299.99)
- USB Cable (Qty: 100, Cost: $9.99)

### Sample API Calls

#### Get All Items
```http
GET /api/items
```

## Project Structure

- `Models/Item.cs` - Item model class
- `Services/ItemService.cs` - Business logic for item operations
- `Controllers/ItemsController.cs` - REST API endpoints
- `Program.cs` - Application configuration and startup
