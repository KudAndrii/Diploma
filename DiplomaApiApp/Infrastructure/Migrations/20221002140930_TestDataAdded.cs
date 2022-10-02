using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    public partial class TestDataAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "ShortDescription",
                table: "Products",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)",
                oldMaxLength: 50);

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Products",
                type: "nvarchar(250)",
                maxLength: 250,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(250)",
                oldMaxLength: 250);

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "CategoryId", "Img", "Name" },
                values: new object[] { 1, null, "First" });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "CategoryId", "Img", "Name" },
                values: new object[] { 2, null, "Second" });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductId", "CartModelCartId", "CategoryId", "Description", "Img", "Name", "Price", "ShortDescription" },
                values: new object[,]
                {
                    { 1, null, 1, null, null, "One", 0.0, null },
                    { 2, null, 1, null, null, "Two", 1.0, null },
                    { 3, null, 1, null, null, "Three", 2.0, null },
                    { 4, null, 2, null, null, "Four", 3.0, null },
                    { 5, null, 2, null, null, "Five", 4.0, null },
                    { 6, null, 2, null, null, "Six", 5.0, null }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 2);

            migrationBuilder.AlterColumn<string>(
                name: "ShortDescription",
                table: "Products",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: string.Empty,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)",
                oldMaxLength: 50,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Products",
                type: "nvarchar(250)",
                maxLength: 250,
                nullable: false,
                defaultValue: string.Empty,
                oldClrType: typeof(string),
                oldType: "nvarchar(250)",
                oldMaxLength: 250,
                oldNullable: true);
        }
    }
}
