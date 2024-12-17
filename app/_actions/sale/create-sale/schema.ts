import { z } from "zod";

// preço | dado sensível,  você nunca deve receber do front, apenas backend

export const createSaleSchema = z.object({
  products: z.array(
    z.object({
      id: z.string().uuid(),
      quantity: z.number().int().positive(),
    }),
  ),
});

export type CreateSaleSchema = z.infer<typeof createSaleSchema>;
