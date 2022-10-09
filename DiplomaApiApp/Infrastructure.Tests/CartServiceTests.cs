using Infrastructure.Interfaces;
using Infrastructure.Interfaces.Services;
using Infrastructure.Models;
using Infrastructure.Services;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Tests
{
    [TestClass]
    public class CartServiceTests
    {
        /*
        private ICartService _cartService;

        [TestInitialize]
        public void TestInitialize()
        {
            Mock<IUnitOfWork> mockUOW = new Mock<IUnitOfWork>();

            mockUOW.Setup(x => x.CartRepository.GetCartByUserId(1))
                .Returns(new CartModel()
                {
                    CartId = 1,
                    Products = new List<ProductModel>()
                    {
                        new ProductModel() { ProductId = 1 },
                        new ProductModel() { ProductId = 2 }
                    }
                });

            _cartService = new CartService(mockUOW.Object);
        }

        [TestCleanup]
        public void TestCleanup()
        {
            _cartService = null;
        }

        [TestMethod]
        public void GetProductsFromCartByUserId_One_ValidProducts()
        {
            // Arrange
            var expectedResult = new CartModel()
            {
                CartId = 1,

                Products = new List<ProductModel>()
                    {
                        new ProductModel() { ProductId = 1 },
                        new ProductModel() { ProductId = 2 }
                    }
            };

            // Act
            List<ProductModel> actualResult = _cartService.GetProductsFromCartByUserId(1);

            // Assert
            CollectionAssert.AreEqual(expectedResult.Products, actualResult);
        }

        [TestMethod]
        public void GetProductsFromCartByUserId_Two_ArgumentNullException()
        {
            // Arrange
            CartModel expectedResult = new CartModel()
            {
                CartId = 1,
                Products = null
            };

            // Act
            List<ProductModel> actualResult;
            try
            {
                actualResult = _cartService.GetProductsFromCartByUserId(2);
            }
            catch (ArgumentNullException)
            {
                actualResult = null;
            }

            // Assert
            Assert.AreEqual(expectedResult.Products, actualResult);
        }
        */
    }
        
}
