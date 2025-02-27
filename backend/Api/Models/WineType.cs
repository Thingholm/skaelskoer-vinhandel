using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class WineType
{
    [Key]
    public int Id { get; set; }
    public required WineCategory WineCategory { get; set; }
}