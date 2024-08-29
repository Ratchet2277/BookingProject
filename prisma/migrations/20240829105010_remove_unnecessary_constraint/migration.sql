/*
  Warnings:

  - A unique constraint covering the columns `[imageId]` on the table `City` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imageId]` on the table `Hotel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imageId]` on the table `Offer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "City_name_key";

-- DropIndex
DROP INDEX "Hotel_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "City_imageId_key" ON "City" ("imageId");

-- CreateIndex
CREATE UNIQUE INDEX "Hotel_imageId_key" ON "Hotel" ("imageId");

-- CreateIndex
CREATE UNIQUE INDEX "Offer_imageId_key" ON "Offer" ("imageId");
