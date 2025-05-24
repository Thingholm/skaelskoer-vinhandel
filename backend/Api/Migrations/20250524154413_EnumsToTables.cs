using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Api.Migrations
{
    /// <inheritdoc />
    public partial class EnumsToTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "unit",
                table: "specialties");

            migrationBuilder.RenameColumn(
                name: "order_status",
                table: "orders",
                newName: "order_status_id");

            migrationBuilder.AddColumn<int>(
                name: "unit_id",
                table: "products",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "order_statuses",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_order_statuses", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "units",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_units", x => x.id);
                });

            migrationBuilder.InsertData(
                table: "order_statuses",
                columns: new[] { "id", "name" },
                values: new object[,]
                {
                    { 1, "Placed" },
                    { 2, "Confirmed" },
                    { 3, "Sent" },
                    { 4, "Delivered" },
                    { 5, "Cancelled" },
                    { 6, "Ready" },
                    { 7, "Done" }
                });

            migrationBuilder.InsertData(
                table: "units",
                columns: new[] { "id", "name" },
                values: new object[,]
                {
                    { 1, "ml" },
                    { 2, "cl" },
                    { 3, "dl" },
                    { 4, "l" },
                    { 5, "gr" },
                    { 6, "kg" },
                    { 7, "stk" }
                });

            migrationBuilder.CreateIndex(
                name: "ix_products_unit_id",
                table: "products",
                column: "unit_id");

            migrationBuilder.CreateIndex(
                name: "ix_orders_order_status_id",
                table: "orders",
                column: "order_status_id");

            migrationBuilder.AddForeignKey(
                name: "fk_orders_order_statuses_order_status_id",
                table: "orders",
                column: "order_status_id",
                principalTable: "order_statuses",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "fk_products_units_unit_id",
                table: "products",
                column: "unit_id",
                principalTable: "units",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_orders_order_statuses_order_status_id",
                table: "orders");

            migrationBuilder.DropForeignKey(
                name: "fk_products_units_unit_id",
                table: "products");

            migrationBuilder.DropTable(
                name: "order_statuses");

            migrationBuilder.DropTable(
                name: "units");

            migrationBuilder.DropIndex(
                name: "ix_products_unit_id",
                table: "products");

            migrationBuilder.DropIndex(
                name: "ix_orders_order_status_id",
                table: "orders");

            migrationBuilder.DropColumn(
                name: "unit_id",
                table: "products");

            migrationBuilder.RenameColumn(
                name: "order_status_id",
                table: "orders",
                newName: "order_status");

            migrationBuilder.AddColumn<int>(
                name: "unit",
                table: "specialties",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
