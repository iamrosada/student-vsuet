/*
  Warnings:

  - You are about to drop the column `course` on the `Student` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "IdStudent" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "ageStart" TEXT NOT NULL,
    "ageFinish" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "whereLive" TEXT NOT NULL,
    "fullNameInLatin" TEXT NOT NULL,
    "diplomIsRed" BOOLEAN NOT NULL,
    "whereDidThePreparatory" TEXT NOT NULL,
    "group" TEXT NOT NULL
);
INSERT INTO "new_Student" ("IdStudent", "ageFinish", "ageStart", "country", "diplomIsRed", "email", "firstName", "fullNameInLatin", "group", "id", "lastName", "telephone", "whereDidThePreparatory", "whereLive") SELECT "IdStudent", "ageFinish", "ageStart", "country", "diplomIsRed", "email", "firstName", "fullNameInLatin", "group", "id", "lastName", "telephone", "whereDidThePreparatory", "whereLive" FROM "Student";
DROP TABLE "Student";
ALTER TABLE "new_Student" RENAME TO "Student";
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");
CREATE UNIQUE INDEX "Student_telephone_key" ON "Student"("telephone");
CREATE UNIQUE INDEX "Student_IdStudent_key" ON "Student"("IdStudent");
CREATE TABLE "new_Course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "course" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,
    CONSTRAINT "Course_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Course" ("course", "courseId", "id") SELECT "course", "courseId", "id" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
