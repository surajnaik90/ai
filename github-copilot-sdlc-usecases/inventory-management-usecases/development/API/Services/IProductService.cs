using InventoryManagement.Models;

namespace API.Services
{
    public interface IProductService
    {
        /// <summary>
        /// Gets all products
        /// </summary>
        /// <returns>List of all products</returns>
        IEnumerable<Product> GetAllProducts();
    }
}
