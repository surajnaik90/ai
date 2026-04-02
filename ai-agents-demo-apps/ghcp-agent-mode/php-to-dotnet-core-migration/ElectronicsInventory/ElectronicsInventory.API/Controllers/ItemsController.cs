using Microsoft.AspNetCore.Mvc;
using ElectronicsInventory.API.Models;
using ElectronicsInventory.API.Services;

namespace ElectronicsInventory.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemsController : ControllerBase
    {
        private readonly IItemService _itemService;

        public ItemsController(IItemService itemService)
        {
            _itemService = itemService;
        }

        /// <summary>
        /// Get all electronics inventory items
        /// </summary>
        /// <returns>List of all items in inventory</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Item>>> GetItems()
        {
            var items = await _itemService.GetAllItemsAsync();
            return Ok(items);
        }
    }
}
