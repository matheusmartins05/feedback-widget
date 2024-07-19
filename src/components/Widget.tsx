import WindowFeedback from "./WindowFeedback";
import iconFeedback from "/iconFeedback.svg";
import { Popover, PopoverButton, PopoverPanel} from "@headlessui/react";

export default function Widget() {
  return (
    <>
      <Popover>
          <div className={`absolute right-10 bottom-10 bg-[#8257e5] p-3 rounded-full h-14 w-14 cursor-pointer overflow-hidden`}>
            <PopoverButton className="outline-none"><img className="w-8 h-8" src={iconFeedback} alt="" /></PopoverButton>
          </div>

          <PopoverPanel className="absolute right-10 bottom-10">
            <WindowFeedback/>
          </PopoverPanel>

    
      </Popover>
    </>
  );
}
