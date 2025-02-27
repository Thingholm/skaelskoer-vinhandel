using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class ProductToOrderMap
{
    [Key]
    public int Id { get; set; }
    public required Product Product { get; set; }
    public required Order Order { get; set; }
}