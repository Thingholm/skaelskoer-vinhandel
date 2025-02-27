using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Models;

public class Specialty
{
    [Key]
    public int Id { get; set; }
    [Column(TypeName = "numeric(10,2)")]
    public decimal Quantity { get; set; }
    public UnitEnum Unit { get; set; }
    public required SpecialtyType SpecialtyType { get; set; }
    public required Product Product { get; set; }
}