-- CreateTable
CREATE TABLE "Image"
(
    "id"  SERIAL NOT NULL,
    "src" TEXT   NOT NULL,
    "alt" TEXT   NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City"
(
    "id"       SERIAL           NOT NULL,
    "name"     TEXT             NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "imageId"  INTEGER          NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hotel"
(
    "id"          SERIAL           NOT NULL,
    "name"        TEXT             NOT NULL,
    "lowestPrice" DOUBLE PRECISION NOT NULL,
    "currency"    TEXT             NOT NULL,
    "imageId"     INTEGER,
    "cityId"      INTEGER          NOT NULL,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flight"
(
    "id"              SERIAL           NOT NULL,
    "departureDate"   TIMESTAMP(3)     NOT NULL,
    "arrivalDate"     TIMESTAMP(3)     NOT NULL,
    "price"           DOUBLE PRECISION NOT NULL,
    "currency"        TEXT             NOT NULL,
    "departureCityId" INTEGER          NOT NULL,
    "arrivalCityId"   INTEGER          NOT NULL,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offer"
(
    "id"          SERIAL  NOT NULL,
    "description" TEXT    NOT NULL,
    "linkText"    TEXT    NOT NULL,
    "discount"    DOUBLE PRECISION,
    "imageId"     INTEGER NOT NULL,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "City_name_key" ON "City" ("name");

-- CreateIndex
CREATE UNIQUE INDEX "Hotel_name_key" ON "Hotel" ("name");

-- AddForeignKey
ALTER TABLE "City"
    ADD CONSTRAINT "City_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hotel"
    ADD CONSTRAINT "Hotel_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hotel"
    ADD CONSTRAINT "Hotel_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight"
    ADD CONSTRAINT "Flight_departureCityId_fkey" FOREIGN KEY ("departureCityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight"
    ADD CONSTRAINT "Flight_arrivalCityId_fkey" FOREIGN KEY ("arrivalCityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer"
    ADD CONSTRAINT "Offer_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
