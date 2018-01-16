using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Data.Persistence.Migrations.ContentDb
{
    public partial class NewMigration3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "Candidates");

            migrationBuilder.AddColumn<bool>(
                name: "Approved",
                table: "Candidates",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Completed",
                table: "Candidates",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Approved",
                table: "Candidates");

            migrationBuilder.DropColumn(
                name: "Completed",
                table: "Candidates");

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Candidates",
                nullable: true);
        }
    }
}
