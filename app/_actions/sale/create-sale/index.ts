"use server";

import { db } from "@/app/_lib/prisma";
import { createSaleSchema, CreateSaleSchema } from "./schema";
import { revalidatePath } from "next/cache";
import { actionClient } from "@/app/_lib/safe-action";
import { returnValidationErrors } from "next-safe-action";

//O useo de transaction faz com que ou o código execute tudo, ou desfaça qualquer operação que tenha feito no caminho. Empede de criar uma etapa e ignorar a outra.
export const createSale = actionClient
.schema(createSaleSchema)
.action(async ({parsedInput: {products}}) => {

  await db.$transaction(async (trx) => {
    const sale = await trx.sale.create({
      data: {
        date: new Date(),
      },
    });

    for (const product of products) {
      const productFromDb = await db.product.findUnique({
        where: {
          id: product.id,
        },
      });

      if (!productFromDb) {
        return returnValidationErrors(createSaleSchema, {
          _errors: ["Product not found."],
        })
      }

      const productIsOutofStock = productFromDb.stock < product.quantity;

      if (productIsOutofStock) {
        return returnValidationErrors(createSaleSchema, {
          _errors:["Product out of stock."]
        })
      }

      await trx.saleProduct.create({
        data: {
          saleId: sale.id,
          productId: product.id,
          quantity: product.quantity,
          unitPrice: productFromDb.price,
        },
      });

      await trx.product.update({
        where: {
          id: product.id,
        },
        data: {
          stock: {
            decrement: product.quantity,
          },
        },
      });
    }
  });
  revalidatePath("/products");
})
