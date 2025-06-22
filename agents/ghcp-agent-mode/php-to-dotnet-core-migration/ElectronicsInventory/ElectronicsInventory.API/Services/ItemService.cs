using ElectronicsInventory.API.Models;

namespace ElectronicsInventory.API.Services
{
    public interface IItemService
    {
        Task<IEnumerable<Item>> GetAllItemsAsync();
    }

    public class ItemService : IItemService
    {
        private readonly List<Item> _items;

        public ItemService()
        {
            // Initialize with sample data from the original PHP application
            _items = new List<Item>
            {
                new Item { Id = 1, Description = "Laptop", Quantity = 10, Cost = 899.99m },
                new Item { Id = 2, Description = "Smartphone", Quantity = 15, Cost = 499.99m },
                new Item { Id = 3, Description = "Headphones", Quantity = 20, Cost = 79.99m },
                new Item { Id = 4, Description = "Tablet", Quantity = 8, Cost = 349.99m },
                new Item { Id = 5, Description = "Monitor", Quantity = 12, Cost = 249.99m },
                new Item { Id = 6, Description = "LCD TV", Quantity = 20, Cost = 2409.99m }
            };
        }

        public Task<IEnumerable<Item>> GetAllItemsAsync()
        {
            return Task.FromResult(_items.AsEnumerable());
        }
    }
}
