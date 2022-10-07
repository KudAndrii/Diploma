using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configurations
{
    public class CartConfiguration : IEntityTypeConfiguration<CartModel>
    {
        public void Configure(EntityTypeBuilder<CartModel> builder)
        {
            builder.HasKey(p => p.CartId);

            builder.HasData(new CartModel()
            {
                CartId = 1,
                UserId = 1
            });
        }
    }
}
