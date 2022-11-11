using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.DbContexts;
using Infrastructure.Interfaces;
using Infrastructure.Interfaces.Repositories;
using Infrastructure.Repositories.SQL;

namespace Infrastructure.UnitsOfWork
{
    public class SQLUnitOfWork : IUnitOfWork, IDisposable
    {
        private bool _disposed = false;

        private SQLContext _db;
        private SQLProductRepository _productRepository;
        private SQLCartRepository _cartRepository;
        private SQLCategoryRepository _categoryRepository;
        private SQLUserRepository _userRepository;
        private SQLOrderRepository _orderRepository;

        public SQLUnitOfWork(SQLContext context)
        {
            _db = context;
        }

        ~SQLUnitOfWork()
        {
            Dispose(false);
        }

        public IProductRepository ProductRepository =>
            _productRepository == null ? new SQLProductRepository(_db) : _productRepository;

        public ICartRepository CartRepository =>
            _cartRepository == null ? new SQLCartRepository(_db) : _cartRepository;

        public ICategoryRepository CategoryRepository =>
            _categoryRepository == null ? new SQLCategoryRepository(_db) : _categoryRepository;

        public IUserRepository UserRepository =>
            _userRepository == null ? new SQLUserRepository(_db) : _userRepository;

        public IOrderRepository OrderRepository =>
            _orderRepository == null ? new SQLOrderRepository(_db) : _orderRepository;

        public void Save()
        {
            _db.SaveChanges();
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    _productRepository = null;
                    _cartRepository = null;
                    _categoryRepository = null;
                    _userRepository = null;
                    _orderRepository = null;
                }

                _db.Dispose();
                _disposed = true;
            }
        }
    }
}
