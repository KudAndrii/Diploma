using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Models;

namespace Infrastructure.Interfaces.Repositories
{
    public interface IOrderRepository
    {
        public List<OrderModel> GetOrderHistoryByUserId(int userId);
        public bool AddOrders(int userId, List<int> productIds);
    }
}
