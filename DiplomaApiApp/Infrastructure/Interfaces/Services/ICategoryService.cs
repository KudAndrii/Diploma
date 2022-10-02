using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Models;

namespace Infrastructure.Interfaces.Services
{
    public interface ICategoryService
    {
        public List<CategoryModel> GetAll();
    }
}
