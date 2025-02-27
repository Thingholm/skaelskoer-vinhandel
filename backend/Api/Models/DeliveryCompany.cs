using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class DeliveryCompany
{
    [Key]
    public int Id { get; set; }
    [StringLength(100)]
    public string Name { get; set; } = null!;
}