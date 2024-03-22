import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Word } from "../types.ts";

const WordComponent :FunctionComponent<{word:Word | undefined}>=(props)=>{
    return(
        <div className="WordSSR">
          {props.word?.word}
        </div>
       
    )

}
export default WordComponent;
