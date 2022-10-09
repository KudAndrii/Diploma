using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Interfaces;
using Infrastructure.Interfaces.Services;
using Infrastructure.Models;

namespace Infrastructure.Services
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _unitOfWork;

        public UserService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public UserModel GetUser(string login, string password)
        {
            var hashPassword = GetHashPassword(password);
            var result = _unitOfWork.UserRepository.GetUser(login, hashPassword);

            return result;
        }

        private string GetHashPassword(string password)
        {
            byte[] passwordBytes = Encoding.UTF8.GetBytes(password);
            byte[] hashedBytes = SHA256.Create().ComputeHash(passwordBytes);
            return BitConverter.ToString(hashedBytes);
        }
    }
}
