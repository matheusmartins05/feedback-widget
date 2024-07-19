import { PopoverButton } from "@headlessui/react";
import { X } from "phosphor-react";

export default function CloseButton(){
    return(
        <PopoverButton className="top-9 right-5 absolute text-zinc-400 hover:text-zinc-100">
            <X className="w-4 h-4 " weight="bold"/>
        </PopoverButton>
    )
}