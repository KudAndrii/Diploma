using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Interfaces.Repositories;

namespace Infrastructure.Interfaces
{
    public interface IUnitOfWork
    {
        public IProductRepository ProductRepository { get; }
        public ICartRepository CartRepository { get; }
        public ICategoryRepository CategoryRepository { get; }
        public IUserRepository UserRepository { get; }
        public IOrderRepository OrderRepository { get; }
        public void Save();
    }
}
