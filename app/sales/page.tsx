import { ComboboxOption } from "../_components/ui/combobox";
import { getProducts } from "../_data-access/product/get-products";
import CreateSaleButton from "./_components/create-sale-button";

const SalesPage = async () => {
  const products = await getProducts();
  const productOptions: ComboboxOption[] = products.map((product) => ({
    label: product.name,
    value: product.id,
  }));

  return (
    <div className="w-full space-y-8 p-8">
      <div className="bg-white p-8 rounded-xl y-full w-full">
        <div className="flex w-full items-center justify-between my-2">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500">
              Gestão de Vendas
            </span>
            <h2 className="text-2xl font-semibold">Vendas</h2>
          </div>
          <CreateSaleButton
            products={products}
            productOptions={productOptions}
          />
        </div>
        {/* <DataT  able
          columns={productTableColumns}
          data={JSON.parse(JSON.stringify(products))} // esso comando remove os warnings
        /> */}
      </div>
    </div>
  );
};

export default SalesPage;
