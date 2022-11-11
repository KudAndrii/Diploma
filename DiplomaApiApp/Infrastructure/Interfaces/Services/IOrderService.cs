using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Models;

namespace Infrastructure.Interfaces.Services
{
    public interface IOrderService
    {
        public List<OrderModel> GetOrderHistoryByUserId(int userId);
        public bool CreateOrder(int userId, List<int> productIds);
    }
}
