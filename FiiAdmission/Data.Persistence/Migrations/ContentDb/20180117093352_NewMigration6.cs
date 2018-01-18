using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace Data.Persistence.Migrations.ContentDb
{
    public partial class NewMigration6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Repartitions",
                table: "Repartitions");

            migrationBuilder.AlterColumn<string>(
                name: "ApprovedCandidateEmail",
                table: "Repartitions",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AddColumn<Guid>(
                name: "Id",
                table: "Repartitions",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Repartitions",
                table: "Repartitions",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Repartitions_ApprovedCandidateEmail",
                table: "Repartitions",
                column: "ApprovedCandidateEmail");

            migrationBuilder.AddForeignKey(
                name: "FK_Repartitions_Candidates_ApprovedCandidateEmail",
                table: "Repartitions",
                column: "ApprovedCandidateEmail",
                principalTable: "Candidates",
                principalColumn: "Email",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Repartitions_Candidates_ApprovedCandidateEmail",
                table: "Repartitions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Repartitions",
                table: "Repartitions");

            migrationBuilder.DropIndex(
                name: "IX_Repartitions_ApprovedCandidateEmail",
                table: "Repartitions");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Repartitions");

            migrationBuilder.AlterColumn<string>(
                name: "ApprovedCandidateEmail",
                table: "Repartitions",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Repartitions",
                table: "Repartitions",
                column: "ApprovedCandidateEmail");
        }
    }
}
