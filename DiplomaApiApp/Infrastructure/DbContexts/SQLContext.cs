using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Configurations;
using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.DbContexts
{
    public class SQLContext : DbContext
    {
        private readonly string _connectionString;

        public SQLContext()
        {
            string connectionString = Environment.GetEnvironmentVariable("DiplomaDatabaseConnection");
            if (connectionString == null)
            {
                throw new ArgumentNullException("Environment variable is not exist");
            }

            _connectionString = connectionString;
        }

        public SQLContext(DbContextOptions<SQLContext> options)
            : base(options)
        {
        }

        public virtual DbSet<UserModel> Users { get; set; } = null!;
        public virtual DbSet<ProductModel> Products { get; set; } = null!;
        public virtual DbSet<CategoryModel> Categories { get; set; } = null!;
        public virtual DbSet<CartModel> Carts { get; set; } = null!;
        public virtual DbSet<ProductCartModel> ProductCarts { get; set; } = null!;
        public virtual DbSet<OrderModel> Orders { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(_connectionString!);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new ProductConfiguration());
            modelBuilder.ApplyConfiguration(new CategoryConfiguration());
            modelBuilder.ApplyConfiguration(new CartConfiguration());
            modelBuilder.ApplyConfiguration(new ProductCartConfiguration());
            modelBuilder.ApplyConfiguration(new OrderConfiguration());

            modelBuilder.Entity<UserModel>()
                .HasOne(u => u.Cart)
                .WithOne(c => c.User)
                .HasForeignKey<CartModel>(c => c.UserId);
        }
    }
}
