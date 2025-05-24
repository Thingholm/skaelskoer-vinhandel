using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {

    }

    public DbSet<Country> Countries { get; set; }
    public DbSet<Customer> Customers { get; set; }
    public DbSet<Delivery> Deliveries { get; set; }
    public DbSet<DeliveryCompany> DeliveryCompanies { get; set; }
    public DbSet<DeliveryOption> DeliveryOptions { get; set; }
    public DbSet<Event> Events { get; set; }
    public DbSet<Glass> Glasses { get; set; }
    public DbSet<GlassToWineTypeMap> GlassesToWineTypesMap { get; set; }
    public DbSet<Liqour> Liqours { get; set; }
    public DbSet<LiqourCategory> LiqourCategories { get; set; }
    public DbSet<Manufacturer> Manufacturers { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderStatus> OrderStatuses { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<ProductToOrderMap> ProductsToOrdersMap { get; set; }
    public DbSet<Region> Regions { get; set; }
    public DbSet<Specialty> Specialties { get; set; }
    public DbSet<SpecialtyType> SpecialtyTypes { get; set; }
    public DbSet<Unit> Units { get; set; }
    public DbSet<Wine> Wines { get; set; }
    public DbSet<WineCategory> WineCategories { get; set; }
    public DbSet<WineType> WineTypes { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<OrderStatus>(entity =>
        { 
            entity.HasData
            (
                new OrderStatus { Id = 1, Name = "Placed" },
                new OrderStatus { Id = 2, Name = "Confirmed" },
                new OrderStatus { Id = 3, Name = "Sent" },
                new OrderStatus { Id = 4, Name = "Delivered" },
                new OrderStatus { Id = 5, Name = "Cancelled" },
                new OrderStatus { Id = 6, Name = "Ready" },
                new OrderStatus { Id = 7, Name = "Done" }
            );
        });

        modelBuilder.Entity<Unit>(entity =>
        { 
            entity.HasData
            (
                new OrderStatus { Id = 1, Name = "ml" },
                new OrderStatus { Id = 2, Name = "cl" },
                new OrderStatus { Id = 3, Name = "dl" },
                new OrderStatus { Id = 4, Name = "l" },
                new OrderStatus { Id = 5, Name = "gr" },
                new OrderStatus { Id = 6, Name = "kg" },
                new OrderStatus { Id = 7, Name = "stk" }
            );
        });
    }
}