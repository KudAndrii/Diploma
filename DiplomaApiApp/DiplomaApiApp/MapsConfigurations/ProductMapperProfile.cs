using AutoMapper;
using DiplomaApiApp.Models;
using Infrastructure.Models;

namespace DiplomaApiApp.MapsConfigurations
{
    public class ProductMapperProfile : Profile
    {
        public ProductMapperProfile()
        {
            CreateMap<ProductModel, ProductResponseModel>();
        }
    }
}
