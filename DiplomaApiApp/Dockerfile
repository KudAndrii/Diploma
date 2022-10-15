FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env

WORKDIR /api-app

# Copy csproj and restore as distinct layers
COPY DiplomaApiApp.sln ./
COPY DiplomaApiApp/*.csproj ./DiplomaApiApp/
COPY Infrastructure/*.csproj ./Infrastructure/
COPY Infrastructure.Tests/*.csproj ./Infrastructure.Tests/

RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish DiplomaApiApp.sln -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0

ENV ASPNETCORE_URLS=http://*:5026
ENV ASPNETCORE_ENVIRONMENT=Development
ENV DiplomaDatabaseConnection="Data Source= host.docker.internal;Initial Catalog=DiplomaDb;MultipleActiveResultSets = true;Integrated Security=True"

USER 1000

WORKDIR /api-app
COPY --from=build-env /api-app/out .

EXPOSE 3000
EXPOSE 7026
EXPOSE 7184
ENTRYPOINT ["dotnet", "DiplomaApiApp.dll"]