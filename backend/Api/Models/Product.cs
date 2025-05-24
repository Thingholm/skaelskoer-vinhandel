using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Models;

public class Product
{
    [Key]
    public int Id { get; set; }
    public int ProductId { get; set; }
    [StringLength(100)]
    public string Name { get; set; } = null!;
    [Column(TypeName = "numeric(10,2)")]
    public decimal Price { get; set; }
    public string? Description { get; set; }
    public int Amount { get; set; }
    public Unit Unit { get; set; } = null!;
    public required Manufacturer Manufacturer { get; set; }
}