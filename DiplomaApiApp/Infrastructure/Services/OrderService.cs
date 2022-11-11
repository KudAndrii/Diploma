using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Interfaces;
using Infrastructure.Interfaces.Services;
using Infrastructure.Models;

namespace Infrastructure.Services
{
    public class OrderService : IOrderService
    {
        private readonly IUnitOfWork _unitOfWork;

        public OrderService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public bool CreateOrder(int userId, List<int> productIds)
        {
            var result = _unitOfWork.OrderRepository.AddOrders(userId, productIds);

            _unitOfWork.Save();

            return result;
        }

        public List<OrderModel> GetOrderHistoryByUserId(int userId)
        {
            var result = _unitOfWork.OrderRepository.GetOrderHistoryByUserId(userId);

            return result;
        }
    }
}
