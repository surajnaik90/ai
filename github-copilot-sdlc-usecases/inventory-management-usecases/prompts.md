# 📝 Prompts Used in Various SDLC stages - Inventory Management

## Requirement generation

- Create a detailed requirements document in md format for managing inventory with these three models: **Supplier**, **Product**, and **Inventory Transaction**.

## Requirement Analysis - User Story Creation

- Create user stories for the development and QA teams to implement the requirements.
- Create a detailed user story for the product management "View Product Catalogue" feature.

## Design

- Create a PlantUML class diagram based on the requirements document.

## Development

  (Context: Attach the PlantUML class diagram created above)
- Create an ASP.NET Core 8.0 class library project with the required models based on the class diagram in the development folder.

  (Context: Attach the detailed user story for the product management "View Product Catalogue" feature.)
- Create an ASP.NET Core 8.0 REST API Project to implement the user story. Implement just the get all products functionality.
  Exclude Service implementation for supplier and inventory transactions, UI/UX reuirements, caching strategy, pagination, sorting etc. 
  Create a separate API sub folder under developemnt folder. Add the API project to an existing InventoryManagement solution file.

- Create two separate layers for frontend and backend for this inventory management system.

- Implement the "View Product Catalogue" feature.