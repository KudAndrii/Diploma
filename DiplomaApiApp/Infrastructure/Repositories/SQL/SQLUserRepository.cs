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
    public class SQLUserRepository : IUserRepository
    {
        private readonly SQLContext _db;

        public SQLUserRepository(SQLContext db)
        {
            _db = db;
        }

        public UserModel GetUser(string login, string password)
        {
            var result = _db.Users.FirstOrDefault(u => u.Login == login && u.Password == password);

            return result == null ? new UserModel() : result;
        }
    }
}
