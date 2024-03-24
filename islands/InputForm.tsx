import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Word } from "../types.ts";
import { useEffect } from "preact/hooks";

const InputForm: FunctionComponent = () => {
    return (
        <div className="ServerSideSearchContainer">
        <form action="/ServerSideSearch">
          <input className="InputSSR" name="word"></input>
          <button type="submit" className="SSRInputButton">
            Search
          </button>
        </form>
        </div>
    );
}
export default InputForm;