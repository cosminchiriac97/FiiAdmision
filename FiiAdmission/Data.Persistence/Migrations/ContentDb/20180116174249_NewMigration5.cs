using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace Data.Persistence.Migrations.ContentDb
{
    public partial class NewMigration5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Classroom",
                columns: table => new
                {
                    Name = table.Column<string>(nullable: false),
                    Capacity = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Classroom", x => x.Name);
                });

            migrationBuilder.CreateTable(
                name: "Repartitions",
                columns: table => new
                {
                    ApprovedCandidateEmail = table.Column<string>(nullable: false),
                    ExamTime = table.Column<DateTime>(nullable: false),
                    RClassroomName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Repartitions", x => x.ApprovedCandidateEmail);
                    table.ForeignKey(
                        name: "FK_Repartitions_Classroom_RClassroomName",
                        column: x => x.RClassroomName,
                        principalTable: "Classroom",
                        principalColumn: "Name",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Repartitions_RClassroomName",
                table: "Repartitions",
                column: "RClassroomName");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Repartitions");

            migrationBuilder.DropTable(
                name: "Classroom");
        }
    }
}
