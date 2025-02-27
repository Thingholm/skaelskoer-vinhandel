using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Models;

public class Liqour
{
    [Key]
    public int Id { get; set; }
    public short? YearsAged { get; set; }
    public short? YearsBottled { get; set; }
    [Column(TypeName = "numeric(3,1)")]
    public decimal AlcoholPercent { get; set; }
    public required Product Product { get; set; }
    public required Country Country { get; set; }
    public required LiqourCategory LiqourCategory { get; set; }
}