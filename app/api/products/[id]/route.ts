import { db } from "@/app/_lib/prisma";
import { NextRequest } from "next/server";

// API APENAS PARA ESTUDO - Uma forma de fazer requisições  de maneira mais segura

//PESQUISA SOMENTE ID

// export async function GET(
//   request: Request,
//   { params }: { params: { id: string } },
// ) {
//   const productId = params.id;
//   const product = await db.product.findUnique({
//     where: {
//       id: productId,
//     },
//   });
//   if (!product) {
//     return Response.json({ message: "Product not found" }, { status: 404 });
//   } else {
//     return Response.json({ product }, { status: 200 });
//   }
// }

//PESQUISA ID COM PARAMETROS localhost:3000/api/products/1254?teste=123   => id = 1254 | params = teste=123

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("teste");
  console.log({ query });
  const productId = params.id;
}

//DELETANDO

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const productId = params.id;
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
}
