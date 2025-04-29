-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_City" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "campaignId" TEXT,
    "name" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "population" TEXT NOT NULL,
    "government" TEXT NOT NULL,
    "economy" TEXT NOT NULL,
    "notableLocations" JSONB NOT NULL,
    "description" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "City_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_City" ("campaignId", "createdAt", "description", "economy", "government", "history", "id", "name", "notableLocations", "population", "size", "updatedAt") SELECT "campaignId", "createdAt", "description", "economy", "government", "history", "id", "name", "notableLocations", "population", "size", "updatedAt" FROM "City";
DROP TABLE "City";
ALTER TABLE "new_City" RENAME TO "City";
CREATE TABLE "new_Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "campaignId" TEXT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "properties" JSONB NOT NULL,
    "history" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Item_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("campaignId", "createdAt", "description", "history", "id", "name", "properties", "rarity", "type", "updatedAt") SELECT "campaignId", "createdAt", "description", "history", "id", "name", "properties", "rarity", "type", "updatedAt" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE TABLE "new_NPC" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "campaignId" TEXT,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "class" TEXT,
    "alignment" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "personality" TEXT NOT NULL,
    "goals" JSONB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "NPC_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_NPC" ("alignment", "background", "campaignId", "class", "createdAt", "description", "goals", "id", "name", "personality", "race", "updatedAt") SELECT "alignment", "background", "campaignId", "class", "createdAt", "description", "goals", "id", "name", "personality", "race", "updatedAt" FROM "NPC";
DROP TABLE "NPC";
ALTER TABLE "new_NPC" RENAME TO "NPC";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
