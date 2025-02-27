using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class GlassToWineTypeMap
{
    [Key]
    public int Id { get; set; }
    public required Glass Glass { get; set; }
    public required WineType WineType { get; set; }
}