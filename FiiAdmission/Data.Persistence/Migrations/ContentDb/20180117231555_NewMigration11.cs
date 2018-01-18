using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Data.Persistence.Migrations.ContentDb
{
    public partial class NewMigration11 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Repartitions_Candidates_ApprovedCandidateEmail",
                table: "Repartitions");

            migrationBuilder.DropForeignKey(
                name: "FK_Repartitions_Classroom_RClassroomName",
                table: "Repartitions");

            migrationBuilder.DropIndex(
                name: "IX_Repartitions_ApprovedCandidateEmail",
                table: "Repartitions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Classroom",
                table: "Classroom");

            migrationBuilder.RenameTable(
                name: "Classroom",
                newName: "Classrooms");

            migrationBuilder.AlterColumn<string>(
                name: "ApprovedCandidateEmail",
                table: "Repartitions",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Classrooms",
                table: "Classrooms",
                column: "Name");

            migrationBuilder.AddForeignKey(
                name: "FK_Repartitions_Classrooms_RClassroomName",
                table: "Repartitions",
                column: "RClassroomName",
                principalTable: "Classrooms",
                principalColumn: "Name",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Repartitions_Classrooms_RClassroomName",
                table: "Repartitions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Classrooms",
                table: "Classrooms");

            migrationBuilder.RenameTable(
                name: "Classrooms",
                newName: "Classroom");

            migrationBuilder.AlterColumn<string>(
                name: "ApprovedCandidateEmail",
                table: "Repartitions",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Classroom",
                table: "Classroom",
                column: "Name");

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

            migrationBuilder.AddForeignKey(
                name: "FK_Repartitions_Classroom_RClassroomName",
                table: "Repartitions",
                column: "RClassroomName",
                principalTable: "Classroom",
                principalColumn: "Name",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
