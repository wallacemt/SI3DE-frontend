import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useUserContext } from "@/hooks/useUserContext";

export const ProfileFormModal = () => {
  const { viewModal, handleViewModal } = useUserContext();
  console.log(viewModal)
  return (
    <Dialog open={viewModal} onOpenChange={handleViewModal}>
      <DialogContent fullscreen hideClose className="w-full flex items-center justify-center flex-col p-10 font-secundaria gap-9">
        <DialogHeader>
          <DialogTitle className="font-principal text-center font-normal text-3xl text-[#171717]">
            Selecione as suas atividades preferidas
          </DialogTitle>
          <DialogDescription className="w-full">
            <h1>Form AQUI!</h1>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
