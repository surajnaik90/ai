namespace InventoryManagement.Models
{
    /// <summary>
    /// Defines the type of inventory transaction
    /// </summary>
    public enum TransactionType
    {
        /// <summary>
        /// Product received into inventory (increases quantity)
        /// </summary>
        Receive,

        /// <summary>
        /// Product sold/removed from inventory (decreases quantity)
        /// </summary>
        Sale
    }
}
