using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class Delivery
{
    [Key]
    public int Id { get; set; }
    public int TrackingId { get; set; }
    [StringLength(100)]
    public string Address { get; set; } = null!;
    [StringLength(100)]
    public string Country { get; set; } = null!;
    public short ZipCode { get; set; }
    [StringLength(100)]
    public string City { get; set; } = null!;
    public required DeliveryOption DeliveryOption { get; set; }
    public required Order Order { get; set; }
}