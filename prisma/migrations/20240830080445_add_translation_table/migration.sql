-- CreateEnum
CREATE TYPE "Lang" AS ENUM ('FR', 'EN');

-- AlterTable
ALTER TABLE "CurrencyConversion" RENAME CONSTRAINT "CurrencyConvertion_pkey" TO "CurrencyConversion_pkey";

-- CreateTable
CREATE TABLE "Translation" (
    "string" TEXT NOT NULL,
    "lang" "Lang" NOT NULL,
    "translation" TEXT NOT NULL,

    CONSTRAINT "Translation_pkey" PRIMARY KEY ("string","lang")
);

-- RenameIndex
ALTER INDEX "CurrencyConvertion_originCurrency_targetCurrency_key" RENAME TO "CurrencyConversion_originCurrency_targetCurrency_key";
