import Link from "next/link";
import { Button } from "./ui/button";
import { ChartLine, Package, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import SidebarButton from "./sidebar-button";

const Sidebar = () => {
  return (
    <div className="bg-white w-64">
      {/*IMAGEM*/}
      <div className="px-8 py-6">
        <h1 className="font-bold text-2xl">STOCKGALE</h1>
      </div>

      {/*BOTOES*/}
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton href="/" title="Dashboard" icon={<ChartLine />} />
        <SidebarButton href="/products" title="Produtos" icon={<Package />} />
        <SidebarButton href="/sales" title="Vendas" icon={<ShoppingCart />} />
      </div>
    </div>
  );
};

export default Sidebar;
