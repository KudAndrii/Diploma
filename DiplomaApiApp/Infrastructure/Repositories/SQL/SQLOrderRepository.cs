using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.DbContexts;
using Infrastructure.Interfaces.Repositories;
using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories.SQL
{
    public class SQLOrderRepository : IOrderRepository
    {
        private readonly SQLContext _db;

        public SQLOrderRepository(SQLContext db)
        {
            _db = db;
        }

        public bool AddOrders(int userId, List<int> productIds)
        {
            foreach (var productId in productIds)
            {
                _db.Orders.Add(new OrderModel()
                {
                    ProductId = productId,
                    UserId = userId,
                    OrderDate = DateTime.UtcNow
                });
            }

            return true;
        }

        public List<OrderModel> GetOrderHistoryByUserId(int userId)
        {
            var result = _db.Orders.Include(o => o.Product).Where(o => o.UserId == userId).OrderBy(o => o.OrderDate).ToList();

            return result;
        }
    }
}
