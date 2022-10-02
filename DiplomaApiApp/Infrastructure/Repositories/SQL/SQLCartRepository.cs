using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.DbContexts;
using Infrastructure.Interfaces.Repositories;
using Infrastructure.Models;

namespace Infrastructure.Repositories.SQL
{
    public class SQLCartRepository : ICartRepository
    {
        private readonly SQLContext _db;

        public SQLCartRepository(SQLContext db)
        {
            _db = db;
        }

        public CartModel GetCartByUserId(int userId) => _db.Carts.FirstOrDefault(c => c.UserId == userId) !;
    }
}
