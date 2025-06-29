using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InventoryManagement.Models
{
    /// <summary>
    /// Records movements of products in and out of inventory
    /// </summary>
    public class InventoryTransaction
    {
        /// <summary>
        /// Unique identifier for the transaction
        /// </summary>
        public int TransactionID { get; set; }

        /// <summary>
        /// ID of the affected product
        /// </summary>
        [ForeignKey("Product")]
        public int ProductID { get; set; }

        /// <summary>
        /// Type of transaction
        /// </summary>
        public TransactionType TransactionType { get; set; }

        /// <summary>
        /// Quantity of product affected
        /// </summary>
        [Required]
        public decimal Quantity { get; set; }

        /// <summary>
        /// Unit cost associated with the transaction
        /// </summary>
        public decimal UnitCost { get; set; }

        /// <summary>
        /// Total cost of transaction (Quantity × UnitCost)
        /// </summary>
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public decimal TotalCost { get; set; }

        /// <summary>
        /// Date and time of transaction
        /// </summary>
        public DateTime TransactionDate { get; set; } = DateTime.Now;

        /// <summary>
        /// Location information for transfers
        /// </summary>
        [StringLength(100)]
        public string? Location { get; set; }

        /// <summary>
        /// Additional transaction information
        /// </summary>
        public string? Notes { get; set; }

        /// <summary>
        /// ID of related supplier (required for Receive transactions)
        /// </summary>
        [ForeignKey("Supplier")]
        public int? SupplierID { get; set; }

        /// <summary>
        /// Navigation property for the affected product
        /// </summary>
        public virtual Product? Product { get; set; }

        /// <summary>
        /// Navigation property for the related supplier
        /// </summary>
        public virtual Supplier? Supplier { get; set; }
    }
}
