import { PopoverButton, PopoverPanel } from "@headlessui/react";
import CloseButton from "./CloseButton";



export default function WindowFeedback(){
    return(
        <PopoverButton>
       
          <div className="bg-zinc-900 h-72 w-96 rounded-lg flex flex-col justify-between py-6">
              <header>
                  <span className="text-2xl text-zinc-400">Deixe seu feedback</span>
                  <CloseButton/>
              </header>
              Hello World

              <footer className="text-zinc-400 text-xs">
                  Seu feedback é muito importante para nós!
              </footer>
          </div>
      </PopoverButton>
    )
}