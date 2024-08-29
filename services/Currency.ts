import {Currencies, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
const defaultCurrency = Currencies.USD

export default async function convert(price: number, originCurrency: Currencies, targetCurrency: Currencies): Promise<number> {
    return price * await getRatio(originCurrency, targetCurrency);
}

async function getRatio(originCurrency: Currencies, targetCurrency: Currencies): Promise<number> {
    if (originCurrency == targetCurrency) {
        return 1;
    }
    let conversion = await prisma.currencyConversion.findFirst({
        where: {
            originCurrency: originCurrency,
            targetCurrency: targetCurrency
        }
    });

    if (conversion) {
        return conversion.ratio
    }

    conversion = await prisma.currencyConversion.findFirst({
        where: {
            originCurrency: targetCurrency,
            targetCurrency: originCurrency
        }
    });

    if (conversion) {
        return 1 / conversion.ratio
    }

    if (originCurrency == defaultCurrency || targetCurrency == defaultCurrency) {
        throw new Error("Conversion rate not found");
    }

    return await getRatio(originCurrency, defaultCurrency) * await getRatio(defaultCurrency, targetCurrency);
}