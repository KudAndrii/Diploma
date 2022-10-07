using Infrastructure.DbContexts;
using Infrastructure.Interfaces;
using Infrastructure.Interfaces.Services;
using Infrastructure.Services;
using Infrastructure.UnitsOfWork;
using Microsoft.EntityFrameworkCore;

namespace DiplomaApiApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddScoped<IUnitOfWork, SQLUnitOfWork>();
            builder.Services.AddScoped<ICartService, CartService>();
            builder.Services.AddScoped<ICategoryService, CategoryService>();
            builder.Services.AddScoped<IProductService, ProductService>();
            builder.Services.AddAutoMapper(typeof(Program));
            builder.Services.AddDbContext<SQLContext>(x => x.UseSqlServer("Data Source= DESKTOP-TEIV913;Initial Catalog=DiplomaDb;Integrated Security=True"));

            builder.Services.AddControllers();

            var app = builder.Build();

            app.UseHttpsRedirection();

            app.UseCors(policy =>
            {
                policy.AllowAnyOrigin();
                policy.AllowAnyHeader();
                policy.AllowAnyMethod();
            });

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}