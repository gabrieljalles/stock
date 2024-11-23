import { productTableColumns } from "./_components/table-columns";
import { DataTable } from "../_components/ui/data-table";
import { getProducts } from "../_data-access/product/get-products";
import CreateButtonProduct from "./_components/create-product-button";

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div className="w-full space-y-8 p-8">
      <div className="bg-white p-8 rounded-xl y-full w-full">
        <div className="flex w-full items-center justify-between my-2">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500">
              Gestão de Produtos
            </span>
            <h2 className="text-2xl font-semibold">Produtos</h2>
          </div>
          <CreateButtonProduct />
        </div>
        <DataTable
          columns={productTableColumns}
          data={JSON.parse(JSON.stringify(products))} // esso comando remove os warnings
        />
      </div>
    </div>
  );
};

export default ProductsPage;
