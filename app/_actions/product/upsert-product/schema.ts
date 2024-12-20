import { z } from "zod";

export type UpsertProductSchema = z.infer<typeof upsertProductSchema>;

export const upsertProductSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1, {
    message: "O nome do produto é obrigatório",
  }),
  price: z.number().min(0.01, {
    message: "O preço do produto é obrigatório",
  }),
  stock: z.coerce
    .number()
    .positive({
      message: "A quantidade deve ser positiva",
    })
    .int()
    .min(0, {
      message: "O Estoque do produto é obrigatório",
    }),
});
