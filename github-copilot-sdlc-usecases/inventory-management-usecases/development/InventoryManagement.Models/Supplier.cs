using System.ComponentModel.DataAnnotations;

namespace InventoryManagement.Models
{
    /// <summary>
    /// Represents a supplier that provides products to the business
    /// </summary>
    public class Supplier
    {
        /// <summary>
        /// Unique identifier for the supplier
        /// </summary>
        public int SupplierID { get; set; }

        /// <summary>
        /// Company or individual name
        /// </summary>
        [Required]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;

        /// <summary>
        /// Name of primary contact
        /// </summary>
        [StringLength(100)]
        public string? ContactPerson { get; set; }

        /// <summary>
        /// Contact email address
        /// </summary>
        [EmailAddress]
        public string? Email { get; set; }

        /// <summary>
        /// Contact phone number
        /// </summary>
        [Phone]
        public string? Phone { get; set; }

        /// <summary>
        /// Physical address
        /// </summary>
        [StringLength(200)]
        public string? Address { get; set; }

        /// <summary>
        /// Whether supplier is currently active
        /// </summary>
        public bool Active { get; set; } = true;

        /// <summary>
        /// Date supplier was added to system
        /// </summary>
        public DateTime DateAdded { get; set; } = DateTime.Now;

        /// <summary>
        /// Additional information about supplier
        /// </summary>
        public string? Notes { get; set; }

        /// <summary>
        /// Navigation property for products supplied by this supplier
        /// </summary>
        public virtual ICollection<Product>? Products { get; set; }
    }
}
