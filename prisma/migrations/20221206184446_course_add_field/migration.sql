/*
  Warnings:

  - Added the required column `graduation` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mastersDegree` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "course" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,
    "graduation" TEXT NOT NULL,
    "mastersDegree" TEXT NOT NULL,
    CONSTRAINT "Course_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Course" ("course", "courseId", "id") SELECT "course", "courseId", "id" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
