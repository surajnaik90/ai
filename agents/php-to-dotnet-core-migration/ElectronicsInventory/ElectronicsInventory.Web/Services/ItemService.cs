using ElectronicsInventory.Web.Models;
using System.Text.Json;

namespace ElectronicsInventory.Web.Services
{
    public interface IItemService
    {
        Task<IEnumerable<Item>> GetItemsAsync();
    }

    public class ItemService : IItemService
    {
        private readonly HttpClient _httpClient;
        private readonly ILogger<ItemService> _logger;

        public ItemService(HttpClient httpClient, ILogger<ItemService> logger)
        {
            _httpClient = httpClient;
            _logger = logger;
        }        public async Task<IEnumerable<Item>> GetItemsAsync()
        {
            try
            {
                _logger.LogInformation($"Attempting to fetch items from {_httpClient.BaseAddress}api/items");
                
                var response = await _httpClient.GetAsync("api/items");
                response.EnsureSuccessStatusCode();

                var content = await response.Content.ReadAsStringAsync();
                _logger.LogInformation($"API returned content: {content}");
                
                var items = JsonSerializer.Deserialize<IEnumerable<Item>>(content, 
                    new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

                return items ?? Enumerable.Empty<Item>();
            }
            catch (HttpRequestException ex)
            {
                _logger.LogError(ex, $"HTTP error fetching items from the API: {ex.Message}, Status: {ex.StatusCode}");
                throw;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error fetching items from the API: {ex.Message}");
                throw;
            }
        }
    }
}
