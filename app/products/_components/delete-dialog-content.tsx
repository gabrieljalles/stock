import { deleteProduct } from "@/app/_actions/product/delete-product";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/_components/ui/alert-dialog";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

interface DeleteProductDialogContentProps {
  productId: string;
}

const DeleteProductDialogContent = ({
  productId,
}: DeleteProductDialogContentProps) => {

  const {execute: executeDeleteProduct} = useAction(deleteProduct, {
    onSuccess: () => {toast.success("Produto excluído com sucesso.")},
    onError: () => {toast.error("Ocorreu um erro ao excluir o produto.")},
  })

  const handleContinueClick = () => executeDeleteProduct({id: productId});

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Você realmente deseja excluir?</AlertDialogTitle>
        <AlertDialogDescription>
          Essa ação não poderá ser desfeita.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={handleContinueClick}>
          Continue
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default DeleteProductDialogContent;
