import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandInput,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

type Option = { value: string; label: string };

interface MultiSelectProps {
  options: string[] | Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  multi?: boolean;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selected,
  onChange,
  multi = true,
  placeholder = "Selecione...",
}) => {
  const [open, setOpen] = React.useState(false);

  const normalizedOptions: Option[] = React.useMemo(() => {
    return typeof options[0] === "string"
      ? (options as string[]).map((val) => ({ value: val, label: val }))
      : (options as Option[]);
  }, [options]);

  const toggleSelect = (option: string) => {
    if (multi) {
      if (selected.includes(option)) {
        onChange(selected.filter((item) => item !== option));
      } else {
        onChange([...selected, option]);
      }
    } else {
      if (selected[0] === option) return;
      onChange([option]);
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          role="combobox"
          aria-expanded={open}
          title={selected.join(", ")}
          className={cn(
            "text-primary border-secundaria focus:border-secundariaP2 placeholder:text-primary/80 bg-DarkP2 border hover:bg-DarkP2/40 w-full justify-between truncate max-w-full overflow-hidden",
            selected.length === 0 && "text-muted-foreground"
          )}
        >
          {selected.length > 0
            ? multi
              ? selected
                  .map((val) => normalizedOptions.find((o) => o.value === val)?.label || val)
                  .join(", ")
              : normalizedOptions.find((o) => o.value === selected[0])?.label || placeholder
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Buscar opção..." />
          <CommandEmpty>Nenhuma opção encontrada.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {normalizedOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  onSelect={() => toggleSelect(option.value)}
                  className="text-principal"
                >
                  <div className="flex items-center gap-2">
                    <Check
                      className={cn(
                        "h-4 w-4",
                        selected.includes(option.value) ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {option.label}
                  </div>
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
