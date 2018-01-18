using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Persistence.Migrations.ContentDb
{
    public partial class AnnouncementsMigrations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Announcements",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Title",
                table: "Announcements");
        }
    }
}
