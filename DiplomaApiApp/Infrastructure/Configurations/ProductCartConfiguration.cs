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
    public class ProductCartConfiguration : IEntityTypeConfiguration<ProductCartModel>
    {
        public void Configure(EntityTypeBuilder<ProductCartModel> builder)
        {
            builder.HasKey(m => m.ProductCartId);
        }
    }
}
