import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Word } from "../types.ts";



const WordIsland :FunctionComponent<{word:Word | undefined}>=(props)=>{
    console.log(props.word!.word)
    return(
        <div className="WordSSR">
        <div className="WordSSRTitle">
         {props.word!.word}
         </div>
         <div className="Defs">
            {props.word!.meanings}
         </div>
        </div>
       
    )

}
export default WordIsland;
