"use client";

import { AlertDialog } from "@/app/_components/ui/alert-dialog";
import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { Product } from "@prisma/client";
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { ColumnDef } from "@tanstack/react-table";
import {
  ChartNoAxesColumn,
  ClipboardCopyIcon,
  IdCard,
  MoreHorizontalIcon,
  PencilIcon,
  TrashIcon,
} from "lucide-react";
import DeleteProductDialogContent from "./delete-dialog-content";

const getStatusLabel = (status: string) => {
  if (status === "IN_STOCK") {
    return "Em estoque";
  } else if (status === "STOCK_ENDING") {
    return "Estoque acabando";
  } else {
    return "Fora de estoque";
  }
};

export const productTableColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor unitário",
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (row) => {
      const product = row.row.original;
      const label = getStatusLabel(product.status);
      return (
        <Badge
          className={`${
            label === "Em estoque"
              ? "bg-green-600"
              : label === "Estoque acabando"
                ? "bg-yellow-500"
                : "bg-red-500"
          }`}
        >
          {label}
        </Badge>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: (row) => {
      const product = row.row.original;
      return (
        <AlertDialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <MoreHorizontalIcon size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="gap-1.5"
                onClick={() => navigator.clipboard.writeText(product)}
              >
                <ClipboardCopyIcon size={16} />
                Copiar ID
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-1.5">
                <PencilIcon size={16} />
                Editar
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-1.5">
                <ChartNoAxesColumn size={16} />
                Dashboard
              </DropdownMenuItem>
              <AlertDialogTrigger>
                <DropdownMenuItem className="gap-1.5 mt-2  border-t-2">
                  <TrashIcon size={16} />
                  Deletar
                </DropdownMenuItem>
              </AlertDialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>
          <DeleteProductDialogContent productId={product.id} />
        </AlertDialog>
      );
    },
  },
];
