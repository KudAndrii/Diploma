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
    public class SQLCategoryRepository : ICategoryRepository
    {
        private readonly SQLContext _db;

        public SQLCategoryRepository(SQLContext db)
        {
            _db = db;
        }

        public IEnumerable<CategoryModel> GetAll()
        {
            return _db.Categories.Where(c => true).ToList();
        }
    }
}
