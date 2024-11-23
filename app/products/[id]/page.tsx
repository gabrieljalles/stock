import { PlusIcon } from "lucide-react";
import { db } from "../../_lib/prisma";
import { Button } from "@/app/_components/ui/button";

const ProductsPage = async () => {
  const products = await db.product.findMany({});
  return (
    <div className="w-full space-y-8 p-8">
      {/*ESQUERDA*/}

      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de Produtos
          </span>
          <h2 className="text-2xl font-semibold">Produtos</h2>
          <p className="text-gray-500">Lista de produtos cadastrados</p>
        </div>
        <Button className="gap-2">
          <PlusIcon size={20} />
          Novo produto
        </Button>
      </div>
      {/*DIREITA*/}
    </div>
  );
};

export default ProductsPage;
