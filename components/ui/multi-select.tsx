"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface MultiSelectProps {
    title: string;
    options: string[];
    selected: string[];
    onChange: (selected: string[]) => void;
    placeholder?: string;
}

export function MultiSelect({
    title,
    options,
    selected,
    onChange,
    placeholder = "Select...",
}: MultiSelectProps) {
    const [open, setOpen] = React.useState(false);

    const handleSelect = (value: string) => {
        if (selected.includes(value)) {
            onChange(selected.filter((item) => item !== value));
        } else {
            onChange([...selected, value]);
        }
    };

    const handleClear = () => {
        onChange([]);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between h-auto min-h-[50px] px-3 py-2 text-left font-normal bg-muted/20 border-border/50 hover:bg-muted/30 hover:text-foreground"
                >
                    <div className="flex flex-col items-start gap-1 w-full overflow-hidden">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{title}</span>
                        {selected.length > 0 ? (
                            <div className="flex flex-wrap gap-1">
                                {selected.slice(0, 3).map((item) => (
                                    <Badge
                                        key={item}
                                        variant="secondary"
                                        className="rounded-sm px-1 font-normal text-xs bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
                                    >
                                        {item}
                                    </Badge>
                                ))}
                                {selected.length > 3 && (
                                    <Badge variant="secondary" className="rounded-sm px-1 font-normal text-xs">
                                        +{selected.length - 3} more
                                    </Badge>
                                )}
                            </div>
                        ) : (
                            <span className="text-muted-foreground/70 text-sm">{placeholder}</span>
                        )}
                    </div>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
                <Command>
                    <CommandInput placeholder={placeholder} />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option}
                                    onSelect={() => handleSelect(option)}
                                    className="cursor-pointer"
                                    value={option} // cmdk uses this for filtering. ensure it matches text
                                >
                                    <div
                                        className={cn(
                                            "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                            selected.includes(option)
                                                ? "bg-primary text-primary-foreground"
                                                : "opacity-50 [&_svg]:invisible"
                                        )}
                                    >
                                        <Check className={cn("h-4 w-4")} />
                                    </div>
                                    <span>{option}</span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                        {selected.length > 0 && (
                            <>
                                <CommandSeparator />
                                <CommandGroup>
                                    <CommandItem
                                        onSelect={handleClear}
                                        className="justify-center text-center cursor-pointer font-medium text-destructive hover:bg-destructive/10"
                                    >
                                        Clear filters
                                    </CommandItem>
                                </CommandGroup>
                            </>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
