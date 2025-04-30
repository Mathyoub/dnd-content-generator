/*
  Warnings:

  - You are about to drop the column `campaignId` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `campaignId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `campaignId` on the `NPC` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "NPC" DROP CONSTRAINT "NPC_campaignId_fkey";

-- AlterTable
ALTER TABLE "City" DROP COLUMN "campaignId";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "campaignId";

-- AlterTable
ALTER TABLE "NPC" DROP COLUMN "campaignId";

-- CreateTable
CREATE TABLE "CampaignCity" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "cityId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignCity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampaignNPC" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "npcId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignNPC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampaignItem" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CampaignCity_campaignId_cityId_key" ON "CampaignCity"("campaignId", "cityId");

-- CreateIndex
CREATE UNIQUE INDEX "CampaignNPC_campaignId_npcId_key" ON "CampaignNPC"("campaignId", "npcId");

-- CreateIndex
CREATE UNIQUE INDEX "CampaignItem_campaignId_itemId_key" ON "CampaignItem"("campaignId", "itemId");

-- AddForeignKey
ALTER TABLE "CampaignCity" ADD CONSTRAINT "CampaignCity_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignCity" ADD CONSTRAINT "CampaignCity_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignNPC" ADD CONSTRAINT "CampaignNPC_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignNPC" ADD CONSTRAINT "CampaignNPC_npcId_fkey" FOREIGN KEY ("npcId") REFERENCES "NPC"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignItem" ADD CONSTRAINT "CampaignItem_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignItem" ADD CONSTRAINT "CampaignItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
