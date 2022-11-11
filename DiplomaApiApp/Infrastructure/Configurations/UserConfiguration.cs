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
                .IsRequired()
                .HasMaxLength(50);

            builder.HasData(new UserModel()
            {
                UserId = 1,
                Login = "user",
                Password = "03-AC-67-42-16-F3-E1-5C-76-1E-E1-A5-E2-55-F0-67-95-36-23-C8-B3-88-B4-45-9E-13-F9-78-D7-C8-46-F4",
            });
        }
    }
}
