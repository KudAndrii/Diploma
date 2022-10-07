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
    public class UserConfiguration : IEntityTypeConfiguration<UserModel>
    {
        public void Configure(EntityTypeBuilder<UserModel> builder)
        {
            builder.HasKey(p => p.UserId);

            builder.Property(p => p.Login)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(p => p.Password)
                .IsRequired();

            builder.HasData(new UserModel()
            {
                UserId = 0,
                Login = "user",
                Password = "1234".GetHashCode(),
                CartId = 0
            });
        }
    }
}
