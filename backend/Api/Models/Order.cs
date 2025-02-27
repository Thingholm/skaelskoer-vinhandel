using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class Order
{
    [Key]
    public int Id { get; set; }
    public int OrderId { get; set; }
    public DateTime OrderPlaced { get; set; }
    public OrderStatusEnum OrderStatus { get; set; }
    public required Customer Customer { get; set; }
}