using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class Event
{
    [Key]
    public int Id { get; set; }
    public DateOnly Date { get; set; }
    public TimeOnly StartTime { get; set; }
    public TimeOnly? EndTime { get; set; }
    [StringLength(100)]
    public string? Address { get; set; }
    public required Product Product { get; set; }
}