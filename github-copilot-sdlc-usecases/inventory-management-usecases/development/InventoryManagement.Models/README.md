# Inventory Management Models

This project contains the domain models for the Inventory Management system based on the requirements document and class diagram.

## Models Included

### Supplier
Represents companies or individuals who provide products to the business.

### Product
Represents items that are purchased from suppliers, stored in inventory, and potentially sold to customers.

### InventoryTransaction
Records all movements of products in and out of inventory, including receipts, sales, adjustments, returns, and transfers.

### TransactionType
Enum defining the various types of inventory transactions supported by the system.

## Usage

These models serve as the foundation for the Inventory Management system. They are designed with data annotations for validation and are ready to be used with Entity Framework Core for data persistence.

The models include relationships:
- A Product has a default Supplier
- An InventoryTransaction relates to both a Product and optionally a Supplier
- A Supplier can provide many Products

## Next Steps

To use these models:

1. Reference this project in your API and UI projects
2. Set up Entity Framework Core with appropriate DbContext
3. Implement data access repositories or services
4. Create controllers or endpoints that work with these models

## Data Validation

The models include standard data annotations for validation:
- Required fields
- String length limitations
- Email and phone number format validation
- Numeric range validation

Additional business rules should be implemented in services or repositories.
