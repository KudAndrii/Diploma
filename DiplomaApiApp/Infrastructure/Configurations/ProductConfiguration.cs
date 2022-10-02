using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configurations
{
    internal class ProductConfiguration : IEntityTypeConfiguration<ProductModel>
    {
        public void Configure(EntityTypeBuilder<ProductModel> builder)
        {
            builder.HasKey(p => p.ProductId);

            builder.Property(p => p.Name)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(p => p.Price)
                .IsRequired();

            builder.Property(p => p.ShortDescription)
                .HasMaxLength(50);

            builder.Property(p => p.Description)
                .HasMaxLength(250);

            builder.HasData(new[]
            {
                new ProductModel
                {
                    ProductId = 1,
                    Name = "One",
                    Price = 0,
                    CategoryId = 1
                },
                new ProductModel
                {
                    ProductId = 2,
                    Name = "Two",
                    Price = 1,
                    CategoryId = 1
                },
                new ProductModel
                {
                    ProductId = 3,
                    Name = "Three",
                    Price = 2,
                    CategoryId = 1
                },
                new ProductModel
                {
                    ProductId = 4,
                    Name = "Four",
                    Price = 3,
                    CategoryId = 2
                },
                new ProductModel
                {
                    ProductId = 5,
                    Name = "Five",
                    Price = 4,
                    CategoryId = 2
                },
                new ProductModel
                {
                    ProductId = 6,
                    Name = "Six",
                    Price = 5,
                    CategoryId = 2
                }
            });
        }
    }
}
