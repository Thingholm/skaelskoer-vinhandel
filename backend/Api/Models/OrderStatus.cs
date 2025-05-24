using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class OrderStatus
{
    [Key]
    public int Id { get; set; }
    public required string Name { get; set; } = null!;
}