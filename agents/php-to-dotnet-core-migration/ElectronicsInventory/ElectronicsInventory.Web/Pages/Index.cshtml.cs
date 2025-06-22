using ElectronicsInventory.Web.Models;
using ElectronicsInventory.Web.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ElectronicsInventory.Web.Pages
{
    public class IndexModel : PageModel
    {
        private readonly IItemService _itemService;
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(IItemService itemService, ILogger<IndexModel> logger)
        {
            _itemService = itemService;
            _logger = logger;
        }

        public IEnumerable<Item> Items { get; private set; } = Enumerable.Empty<Item>();
        public int TotalQuantity { get; private set; }
        public decimal TotalValue { get; private set; }
        public bool HasError { get; private set; }
        public string ErrorMessage { get; private set; } = string.Empty;

        // Sort properties
        [BindProperty(SupportsGet = true)]
        public string SortColumn { get; set; } = "Id";

        [BindProperty(SupportsGet = true)]
        public string SortOrder { get; set; } = "asc";       
        public async Task OnGetAsync()
        {
            try
            {
                _logger.LogInformation("Attempting to fetch inventory items");
                Items = await _itemService.GetItemsAsync();

                // Calculate totals
                TotalQuantity = Items.Sum(i => i.Quantity);
                TotalValue = Items.Sum(i => i.TotalValue);

                // Apply sorting
                Items = ApplySorting(Items);
                _logger.LogInformation($"Successfully loaded {Items.Count()} inventory items");
            }
            catch (HttpRequestException ex)
            {
                HasError = true;
                ErrorMessage = $"Failed to connect to API: {ex.Message}";
                _logger.LogError(ex, $"HTTP Error retrieving items: {ex.Message}, Status: {ex.StatusCode}");
            }
            catch (Exception ex)
            {
                HasError = true;
                ErrorMessage = $"Failed to load inventory items: {ex.Message}";
                _logger.LogError(ex, $"Error retrieving items: {ex.Message}");
            }
        }

        private IEnumerable<Item> ApplySorting(IEnumerable<Item> items)
        {
            return SortOrder.ToLower() == "desc" 
                ? SortDescending(items, SortColumn)
                : SortAscending(items, SortColumn);
        }

        private IEnumerable<Item> SortAscending(IEnumerable<Item> items, string column)
        {
            return column.ToLower() switch
            {
                "description" => items.OrderBy(i => i.Description),
                "quantity" => items.OrderBy(i => i.Quantity),
                "cost" => items.OrderBy(i => i.Cost),
                "totalvalue" => items.OrderBy(i => i.TotalValue),
                _ => items.OrderBy(i => i.Id)  // Default sort by ID
            };
        }

        private IEnumerable<Item> SortDescending(IEnumerable<Item> items, string column)
        {
            return column.ToLower() switch
            {
                "description" => items.OrderByDescending(i => i.Description),
                "quantity" => items.OrderByDescending(i => i.Quantity),
                "cost" => items.OrderByDescending(i => i.Cost),
                "totalvalue" => items.OrderByDescending(i => i.TotalValue),
                _ => items.OrderByDescending(i => i.Id)  // Default sort by ID
            };
        }

        public string GetSortIcon(string column)
        {
            if (SortColumn.Equals(column, StringComparison.OrdinalIgnoreCase))
            {
                return SortOrder.ToLower() == "asc" ? "▲" : "▼";
            }
            return "↕";  // Default icon when column is not the current sort column
        }

        public string GetSortUrl(string column)
        {
            // Toggle sort order if this is the current sort column
            var newOrder = SortColumn.Equals(column, StringComparison.OrdinalIgnoreCase) 
                ? (SortOrder.ToLower() == "asc" ? "desc" : "asc") 
                : "asc";
            
            return $"?SortColumn={column}&SortOrder={newOrder}";
        }
    }
}
