using ItemsApi.Models;

namespace ItemsApi.Services
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
            // Initialize with sample data
            _items = new List<Item>
            {
                new Item { Id = 1, Description = "Laptop", Quantity = 10, Cost = 999.99m },
                new Item { Id = 2, Description = "Mouse", Quantity = 50, Cost = 29.99m },
                new Item { Id = 3, Description = "Keyboard", Quantity = 30, Cost = 79.99m },
                new Item { Id = 4, Description = "Monitor", Quantity = 15, Cost = 299.99m },
                new Item { Id = 5, Description = "USB Cable", Quantity = 100, Cost = 9.99m }
            };
        }

        public Task<IEnumerable<Item>> GetAllItemsAsync()
        {
            return Task.FromResult(_items.AsEnumerable());
        }
    }
}
