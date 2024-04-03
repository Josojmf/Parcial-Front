import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Word } from "../types.ts";

const WordComponent: FunctionComponent<{ word: Word | undefined }> = (
  props
) => {

  return (
    <div className="MainPage">
    <div className="WordSSR">
      <div className="WordSSRTitle">{props.word?.word}</div>
      {props.word?.meanings.map((meaning) => {
        return (
          <div>
            <h2>{meaning.partofSpeech}</h2>
            {meaning.definitions.map((definition) => {
              return (
              <a className="DefinitionSSR" href="/WordPage">
                {definition.definition}
                </a>)
            })}
          </div>
        );
      })}
    </div>
  </div>
  );
  
};
export default WordComponent;
