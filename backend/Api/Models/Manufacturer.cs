using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class Manufacturer
{
    [Key]
    public int Id { get; set; }
    [StringLength(100)]
    public string Name { get; set; } = null!;
}