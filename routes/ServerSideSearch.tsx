import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { useState } from "preact/hooks";
import WordComponent from "../components/WordSSR.tsx";
import Axios from "npm:axios";
export type Word = {
  word: string;
  meanings: Meaning[];
};
export type Meaning = {
  partofSpeech: "string";
  definitions: Definition[];
};
export type Definition = {
  definition: string;
};export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext) => {
      const url = new URL(req.url);
      const wordSearch= url.searchParams.get("word");
      ;     const APIurl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordSearch}`;
      const response = await Axios.get(APIurl);
      const word = response.data.at(0) as Word;
      console.log(word);
      return ctx.render(word);
    },
}
const Page = (props: PageProps<Word | undefined>) => {
        const word = props.data as Word;
        return (
          <div>
            <WordComponent word={props.data}></WordComponent>
          </div>
        );
      };
      export default Page;