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
    public DbSet<Product> Products { get; set; }
    public DbSet<ProductToOrderMap> ProductsToOrdersMap { get; set; }
    public DbSet<Region> Regions { get; set; }
    public DbSet<Specialty> Specialties { get; set; }
    public DbSet<SpecialtyType> SpecialtyTypes { get; set; }
    public DbSet<Wine> Wines { get; set; }
    public DbSet<WineCategory> WineCategories { get; set; }
    public DbSet<WineType> WineTypes { get; set; }
}