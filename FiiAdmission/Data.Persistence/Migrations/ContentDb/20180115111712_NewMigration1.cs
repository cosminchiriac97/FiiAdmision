using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Persistence.Migrations.ContentDb
{
    public partial class NewMigration1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Forms",
                newName: "UserEmail");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserEmail",
                table: "Forms",
                newName: "UserId");
        }
    }
}
