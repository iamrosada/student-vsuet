-- CreateTable
CREATE TABLE "Student" (
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

-- CreateTable
CREATE TABLE "Languange" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "language" TEXT NOT NULL,
    "languageId" INTEGER NOT NULL,
    CONSTRAINT "Languange_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "course" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,
    CONSTRAINT "Course_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_telephone_key" ON "Student"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Student_IdStudent_key" ON "Student"("IdStudent");
