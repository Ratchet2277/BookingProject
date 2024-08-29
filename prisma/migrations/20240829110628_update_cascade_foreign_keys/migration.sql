-- DropForeignKey
ALTER TABLE "City"
    DROP CONSTRAINT "City_imageId_fkey";

-- DropForeignKey
ALTER TABLE "Flight"
    DROP CONSTRAINT "Flight_arrivalCityId_fkey";

-- DropForeignKey
ALTER TABLE "Flight"
    DROP CONSTRAINT "Flight_departureCityId_fkey";

-- DropForeignKey
ALTER TABLE "Hotel"
    DROP CONSTRAINT "Hotel_cityId_fkey";

-- DropForeignKey
ALTER TABLE "Hotel"
    DROP CONSTRAINT "Hotel_imageId_fkey";

-- DropForeignKey
ALTER TABLE "Offer"
    DROP CONSTRAINT "Offer_imageId_fkey";

-- AddForeignKey
ALTER TABLE "City"
    ADD CONSTRAINT "City_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hotel"
    ADD CONSTRAINT "Hotel_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hotel"
    ADD CONSTRAINT "Hotel_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight"
    ADD CONSTRAINT "Flight_departureCityId_fkey" FOREIGN KEY ("departureCityId") REFERENCES "City" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight"
    ADD CONSTRAINT "Flight_arrivalCityId_fkey" FOREIGN KEY ("arrivalCityId") REFERENCES "City" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer"
    ADD CONSTRAINT "imageId" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
