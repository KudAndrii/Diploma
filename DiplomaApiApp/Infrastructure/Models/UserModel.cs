﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Models
{
    [Table("Users")]
    public class UserModel
    {
        public int UserId { get; set; }
        public string? Login { get; set; }
        public int Password { get; set; }
        public CartModel? Cart { get; set; }
    }
}