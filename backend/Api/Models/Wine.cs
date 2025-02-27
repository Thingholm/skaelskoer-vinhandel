using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Models;

public class Wine
{
    [Key]
    public int Id { get; set; }
    public short Year { get; set; }
    public required Product Product { get; set; }
    public required WineType WineType { get; set; }
    public required Country Country { get; set; }
}