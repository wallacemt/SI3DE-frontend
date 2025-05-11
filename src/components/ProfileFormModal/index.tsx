import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { usePerfilModal } from "@/hooks/useProfileModal";
import { useUserContext } from "@/hooks/useUserContext";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MultiSelect } from "../ui/multiselect";
import opcoes from "@/data/opcoesPerfil.json";
import opcoesCurso from "@/data/opcoesCurso.json";
import { Loading } from "../Utils/Loading";
import { CircleSpinner } from "../ui/circleSpin";
import { DialogDescription } from "@radix-ui/react-dialog";

export const ProfileFormModal = () => {
  const { viewModal, handleViewModal } = useUserContext();
  const { form, loading, onSubmit } = usePerfilModal();
  const formatUrl = (url: string) => (url.startsWith("https://") ? url : `https://${url}`);

  return (
    <Dialog open={viewModal} onOpenChange={handleViewModal}>
      <DialogContent
        fullscreen
        hideClose
        className="w-full flex items-center justify-center flex-col px-6 py-10 font-secundaria gap-10 bg-DarkP rounded-md border border-DarkA2 shadow-2xl overflow-auto"
        onEscapeKeyDown={(e) => {
          e.preventDefault();
        }}
      >
          <img src="/logo.svg" alt="Wyden Logo" className=" fixed top-[-0.3rem] left-[-1.2rem] w-32 mb-4 self-start" />
        <DialogHeader>
          <img
            src="https://res.cloudinary.com/dg9hqvlas/image/upload/v1744306739/logo_dhl8vb.png"
            alt="Project Logo"
            className="w-32 lg:w-44 self-center top-0 border-b border-gray-400 md:mt-40 mt-80"
          />
          <DialogTitle className="font-principal text-center font-normal text-4xl text-secundaria mt-4">
            Complete seu Perfil
          </DialogTitle>
          <DialogDescription className="text-sm text-center">
            Por favor, preencha suas informações para que possamos te fornecer experiências mais personalizadas.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full max-w-2xl  space-y-4 text-primary bg-DarkP2 p-2 rounded-md"
          >
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Nome <span className="text-destaque">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-primary border-secundaria focus:border-secundariaP2 placeholder:text-primary/80"
                      placeholder="Ex: Fulano de tal"
                      {...field}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="curso"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Curso <span className="text-destaque">*</span>
                  </FormLabel>
                  <FormControl>
                    <MultiSelect
                      options={opcoesCurso}
                      selected={field.value ? [field.value] : []}
                      onChange={(val) => field.onChange(val[0] || "")}
                      placeholder="Selecione seu curso"
                      multi={false}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="numeroMateriasConcluidas"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Número de matérias concluídas <span className="text-destaque">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="text-primary border-secundaria focus:border-secundariaP2 placeholder:text-primary/80"
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      placeholder="Ex: 10"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="craValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    CRA <span className="text-destaque">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.1"
                      className="text-primary border-secundaria focus:border-secundariaP2 placeholder:text-primary/80"
                      placeholder="Ex: 8.5"
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="interesses"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Áreas de Interesse <span className="text-destaque">*</span>
                  </FormLabel>
                  <FormControl>
                    <MultiSelect
                      {...field}
                      options={opcoes.interesses}
                      selected={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="habilidades"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Habilidades <span className="text-destaque ">*</span>
                  </FormLabel>
                  <FormControl>
                    <MultiSelect options={opcoes.habilidades} selected={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    LinkedIn <span className="text-destaque">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://linkedin.com/in/..."
                      className="text-primary border-secundaria focus:border-secundariaP2 placeholder:text-primary/80"
                      onChange={(e) => field.onChange(formatUrl(e.target.value))}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="github"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    GitHub <span className="text-destaque">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://github.com/..."
                      className="text-primary border-secundaria focus:border-secundariaP2 placeholder:text-primary/80"
                      onChange={(e) => field.onChange(formatUrl(e.target.value))}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="portfolio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Portfólio (opcional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://meuportfolio.com"
                      className="text-primary border-secundaria focus:border-secundariaP2 placeholder:text-primary/80"
                      onChange={(e) => field.onChange(formatUrl(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-secundaria w-full text-white font-semibold py-6 px-6 rounded-md hover:bg-purple-800 transition disabled:opacity-80 cursor-pointer text-lg font-principal"
              disabled={loading}
            >
              {loading ? <Loading spiner={<CircleSpinner size={30} color="#FF2F00" />} /> : "Salvar Informações"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
