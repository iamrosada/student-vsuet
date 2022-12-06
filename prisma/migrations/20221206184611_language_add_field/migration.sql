/*
  Warnings:

  - Added the required column `nativeLanguage` to the `Languange` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otherLanguage` to the `Languange` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Languange" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "language" TEXT NOT NULL,
    "languageId" INTEGER NOT NULL,
    "nativeLanguage" TEXT NOT NULL,
    "otherLanguage" TEXT NOT NULL,
    CONSTRAINT "Languange_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Languange" ("id", "language", "languageId") SELECT "id", "language", "languageId" FROM "Languange";
DROP TABLE "Languange";
ALTER TABLE "new_Languange" RENAME TO "Languange";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
