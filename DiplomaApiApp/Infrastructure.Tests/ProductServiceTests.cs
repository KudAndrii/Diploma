using Infrastructure.Interfaces;
using Infrastructure.Models;
using Infrastructure.Services;
using Moq;
using System.Diagnostics;
using System.Linq.Expressions;
using System.Security.Cryptography.X509Certificates;

namespace Infrastructure.Tests
{
    [TestClass]
    public class ProductServiceTests
    {
        private ProductService _productService;

        [TestInitialize]
        public void TestInitialize()
        {
            Mock<IUnitOfWork> mockUOW = new Mock<IUnitOfWork>();

            mockUOW.Setup(x => x.ProductRepository.GetById(1))
                .Returns(new ProductModel()
                {
                    ProductId = 1,
                    Name = "one"
                });

            _productService = new ProductService(mockUOW.Object);
        }

        [TestCleanup]
        public void TestCleanup()
        {
            _productService = null;
        }

        [TestMethod]
        public void GetById_One_FirstProduct()
        {
            // Arrange
            var expectedResult = new ProductModel()
            {
                ProductId = 1,
                Name = "one"
            };

            // Act
            var actualResult = _productService.GetById(1);

            // Assert
            Assert.AreEqual(expectedResult, actualResult);
        }

        [TestMethod]
        public void GetById_Two_ArgumentNullException()
        {
            // Arrange
            ProductModel expectedResult = null;

            // Act
            ProductModel actualResult;
            try
            {
                actualResult = _productService.GetById(2);
            }
            catch (ArgumentNullException)
            {
                actualResult = null;
            }

            // Assert
            Assert.AreEqual(expectedResult, actualResult);
        }
    }
}