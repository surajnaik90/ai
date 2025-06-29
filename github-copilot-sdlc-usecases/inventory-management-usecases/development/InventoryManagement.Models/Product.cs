using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InventoryManagement.Models
{
    /// <summary>
    /// Represents a product that can be stored in inventory and sold to customers
    /// </summary>
    public class Product
    {
        /// <summary>
        /// Unique identifier for the product
        /// </summary>
        public int ProductID { get; set; }

        /// <summary>
        /// Stock Keeping Unit code
        /// </summary>
        [Required]
        [StringLength(50)]
        public string SKU { get; set; } = string.Empty;

        /// <summary>
        /// Product name
        /// </summary>
        [Required]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;

        /// <summary>
        /// Detailed product description
        /// </summary>
        public string? Description { get; set; }

        /// <summary>
        /// Product category
        /// </summary>
        [StringLength(50)]
        public string? Category { get; set; }

        /// <summary>
        /// ID of primary supplier
        /// </summary>
        [ForeignKey("DefaultSupplier")]
        public int DefaultSupplierID { get; set; }

        /// <summary>
        /// Purchase cost from supplier
        /// </summary>
        [Range(0, double.MaxValue)]
        public decimal Cost { get; set; }

        /// <summary>
        /// Whether product is currently active
        /// </summary>
        public bool Active { get; set; } = true;

        /// <summary>
        /// Navigation property for the default supplier of this product
        /// </summary>
        public virtual Supplier? DefaultSupplier { get; set; }

        /// <summary>
        /// Navigation property for inventory transactions involving this product
        /// </summary>
        public virtual ICollection<InventoryTransaction>? InventoryTransactions { get; set; }
    }
}
