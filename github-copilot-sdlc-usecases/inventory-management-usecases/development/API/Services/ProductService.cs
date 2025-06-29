using InventoryManagement.Models;

namespace API.Services
{
    public class ProductService : IProductService
    {
        private readonly List<Product> _products;

        public ProductService()
        {
            // Initialize with sample data
            _products = new List<Product>
            {
                new Product
                {
                    ProductID = 1,
                    SKU = "LAPTOP-001",
                    Name = "Business Laptop Pro",
                    Description = "High performance laptop for business professionals",
                    Category = "Computers",
                    DefaultSupplierID = 1,
                    Cost = 899.99m,
                    Active = true
                },
                new Product
                {
                    ProductID = 2,
                    SKU = "MONITOR-001",
                    Name = "UltraWide Monitor 32\"",
                    Description = "32-inch curved ultrawide monitor",
                    Category = "Monitors",
                    DefaultSupplierID = 1,
                    Cost = 349.99m,
                    Active = true
                },
                new Product
                {
                    ProductID = 3,
                    SKU = "PRINTER-001",
                    Name = "LaserJet Printer",
                    Description = "High-speed color laser printer",
                    Category = "Printers",
                    DefaultSupplierID = 2,
                    Cost = 299.99m,
                    Active = true
                },
                new Product
                {
                    ProductID = 4,
                    SKU = "PHONE-001",
                    Name = "Smartphone X",
                    Description = "Latest model smartphone with high-resolution camera",
                    Category = "Phones",
                    DefaultSupplierID = 3,
                    Cost = 699.99m,
                    Active = true
                },
                new Product
                {
                    ProductID = 5,
                    SKU = "TABLET-001",
                    Name = "Pro Tablet 10\"",
                    Description = "10-inch professional tablet with stylus support",
                    Category = "Tablets",
                    DefaultSupplierID = 3,
                    Cost = 449.99m,
                    Active = false
                }
            };
        }

        public IEnumerable<Product> GetAllProducts()
        {
            // In a real implementation, we would fetch from a database
            return _products;
        }
    }
}
