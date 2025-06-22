namespace ElectronicsInventory.Web.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Description { get; set; } = string.Empty;
        public int Quantity { get; set; }
        public decimal Cost { get; set; }
        
        // Calculated property for the UI
        public decimal TotalValue => Quantity * Cost;
    }
}
