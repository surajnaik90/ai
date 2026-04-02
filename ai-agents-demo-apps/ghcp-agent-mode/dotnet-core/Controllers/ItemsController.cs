using Microsoft.AspNetCore.Mvc;
using ItemsApi.Models;
using ItemsApi.Services;

namespace ItemsApi.Controllers
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
        /// Get all items
        /// </summary>
        /// <returns>List of all items</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Item>>> GetItems()
        {
            var items = await _itemService.GetAllItemsAsync();
            return Ok(items);
        }
    }
}
