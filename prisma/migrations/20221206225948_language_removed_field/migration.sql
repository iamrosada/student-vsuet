/*
  Warnings:

  - You are about to drop the column `language` on the `Languange` table. All the data in the column will be lost.
  - You are about to drop the column `course` on the `Course` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Languange" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "languageId" INTEGER NOT NULL,
    "nativeLanguage" TEXT NOT NULL,
    "otherLanguage" TEXT NOT NULL,
    CONSTRAINT "Languange_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Languange" ("id", "languageId", "nativeLanguage", "otherLanguage") SELECT "id", "languageId", "nativeLanguage", "otherLanguage" FROM "Languange";
DROP TABLE "Languange";
ALTER TABLE "new_Languange" RENAME TO "Languange";
CREATE TABLE "new_Course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "courseId" INTEGER NOT NULL,
    "graduation" TEXT NOT NULL,
    "mastersDegree" TEXT NOT NULL,
    CONSTRAINT "Course_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Course" ("courseId", "graduation", "id", "mastersDegree") SELECT "courseId", "graduation", "id", "mastersDegree" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
