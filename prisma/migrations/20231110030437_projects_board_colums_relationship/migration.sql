/*
  Warnings:

  - Added the required column `boardID` to the `Colum` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Board" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectID" INTEGER NOT NULL,
    CONSTRAINT "Board_projectID_fkey" FOREIGN KEY ("projectID") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Colum" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "boardID" INTEGER NOT NULL,
    CONSTRAINT "Colum_boardID_fkey" FOREIGN KEY ("boardID") REFERENCES "Board" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Colum" ("id", "title") SELECT "id", "title" FROM "Colum";
DROP TABLE "Colum";
ALTER TABLE "new_Colum" RENAME TO "Colum";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
