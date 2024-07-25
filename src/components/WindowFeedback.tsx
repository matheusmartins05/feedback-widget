import { PopoverButton } from "@headlessui/react";
import CloseButton from "./CloseButton";
import dotsThree from '/dotsThree.svg'
import ideia from '/ideia.svg'
import rocketLaunch from '/rocket-launch.svg'


export default function WindowFeedback(){

    const feedbackTypes = {
        ELOGIO: {
            title: 'Elogio',
            image: {
                src: rocketLaunch,
                alt: 'icone de foguete'
            }
        },
        IDEIA: {
            title: 'Ideia',
            image: {
                src: ideia,
                alt: 'icone de lampada'
            }
        },
        OUTRO: {
            title: 'Outro',
            image: {
                src: dotsThree,
                alt: 'icone de reticências'
            }
        }
    }

    


    return(
          <div className="bg-zinc-900 h-72 w-96 rounded-lg flex flex-col justify-between items-center py-6">
              <header>
                  <span className="text-2xl text-zinc-400">Deixe seu feedback</span>
                  <CloseButton/>
              </header>
              
              <div className="flex justify-between h-[60%] w-[90%] mx-auto">
                  {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button 
                            className="bg-zinc-800 rounded-lg border-2 border-transparent hover:border-purple-400 focus:outline-none focus:border-purple-400 flex flex-col gap-4 justify-center items-center w-[30%]"
                            key={key}
                        >
                            <img className="text-white" src={value.image.src} alt={value.image.alt} />
                            <span className="text-white">{value.title}</span>
                        </button>
                    );
                  })}
              </div>

              <footer className="text-zinc-400 text-xs">
                  Seu feedback é muito importante!
              </footer>
          </div>

    )
}