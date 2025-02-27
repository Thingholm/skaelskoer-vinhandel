using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Models;

public class DeliveryOption
{
    [Key]
    public int Id { get; set; }
    [Column(TypeName = "numeric(10,2)")]
    public decimal Price { get; set; }
    public required DeliveryCompany DeliveryCompany { get; set; }
}