/*
  Warnings:

  - Changed the type of `currency` on the `Flight` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `currency` on the `Hotel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `discount` on table `Offer` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Currencies" AS ENUM ('EUR', 'USD', 'CAD', 'AUD');

-- AlterTable
ALTER TABLE "Flight" ALTER COLUMN "price" SET DEFAULT 0,
DROP COLUMN "currency",
ADD COLUMN     "currency" "Currencies" NOT NULL;

-- AlterTable
ALTER TABLE "Hotel" ALTER COLUMN "lowestPrice" SET DEFAULT 0,
DROP COLUMN "currency",
ADD COLUMN     "currency" "Currencies" NOT NULL;

-- AlterTable
ALTER TABLE "Offer" ALTER COLUMN "discount" SET NOT NULL,
ALTER COLUMN "discount" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "CurrencyConversion" (
    "id" SERIAL NOT NULL,
    "originCurrency" "Currencies" NOT NULL,
    "targetCurrency" "Currencies" NOT NULL,
    "ratio" DOUBLE PRECISION NOT NULL DEFAULT 1,

    CONSTRAINT "CurrencyConvertion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CurrencyConvertion_originCurrency_targetCurrency_key" ON "CurrencyConversion"("originCurrency", "targetCurrency");
