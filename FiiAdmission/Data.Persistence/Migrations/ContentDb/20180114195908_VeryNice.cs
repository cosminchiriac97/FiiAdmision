using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Data.Persistence.Migrations.ContentDb
{
    public partial class VeryNice : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
        
            migrationBuilder.CreateTable(
                name: "AnswerToAdmissionForms",
                columns: table => new
                {
                    Email = table.Column<string>(nullable: false),
                    Reason = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnswerToAdmissionForms", x => x.Email);
                });

            migrationBuilder.CreateTable(
                name: "Candidates",
                columns: table => new
                {
                    Email = table.Column<string>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    FormId = table.Column<Guid>(nullable: false),
                    IsAccepted = table.Column<bool>(nullable: false),
                    LastName = table.Column<string>(nullable: true),
                    School = table.Column<string>(nullable: true),
                    Subject = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Candidates", x => x.Email);
                });

            migrationBuilder.CreateTable(
                name: "Forms",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Forms", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AnswerToAdmissionForms");

            migrationBuilder.DropTable(
                name: "Candidates");

            migrationBuilder.DropTable(
                name: "Forms");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Announcements");
        }
    }
}
