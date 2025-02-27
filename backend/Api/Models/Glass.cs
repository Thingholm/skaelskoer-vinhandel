using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class Glass
{
    [Key]
    public int Id { get; set; }
    public required Product Product { get; set; }
}