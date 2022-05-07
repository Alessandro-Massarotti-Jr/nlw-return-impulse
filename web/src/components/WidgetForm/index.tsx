import { CloseButton } from "../CloseButton";

import BugImageUrl from "../../assets/bug.svg";
import IdeaImageUrl from "../../assets/idea.svg";
import ThoughtImageUrl from "../../assets/thought.svg";

import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG:{
        title:"Problema",
        image:{
            source:BugImageUrl,
            alt:"Imagem de um inseto"
        }
    },
    IDEA:{
        title:"Idea",
        image:{
            source:IdeaImageUrl,
            alt:"Imagem de uma lampada"
        }
    },
    OTHER:{
        title:"Outro",
        image:{
            source:ThoughtImageUrl,
            alt:"Imagem de um balão de pensamento"
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent,setFeedbackSent] = useState(false);

    function handleRestartFeedbackType(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

             {feedbackSent ? (<FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedbackType}/>)
             :<>
                         {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
            )
            
                 : (<FeedbackContentStep
                 feedbackType={feedbackType}
                 onFeedbackRestartRequested={handleRestartFeedbackType}
                 onFeedbackSent={()=>setFeedbackSent(true)}
                 />) }
             </>}


            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}