using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class Customer
{
    [Key]
    public int Id { get; set; }
    public int CustomerId { get; set; }
    [StringLength(100)]
    public string FirstName { get; set; } = null!;
    [StringLength(100)]
    public string LastName { get; set; } = null!;
    [StringLength(100)]
    public string Email { get; set; } = null!;
    public int? PhoneNumber { get; set; }
    [StringLength(100)]
    public string Country { get; set; } = null!;
    [StringLength(100)]
    public string Address { get; set; } = null!;
    public short ZipCode { get; set; }
    [StringLength(100)]
    public string City { get; set; } = null!;
}