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
};
export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const wordToSearch = url.searchParams.get("word");
    const APIurl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordToSearch}`;
    const response = await Axios.get(APIurl);
    const word = response.data.at(0) as Word;
    return ctx.render(word);
  },
};
const Page = (props: PageProps<Word | undefined>) => {
  const word = props.data as Word;
  return (
    <div>
      <div>
        <form action="/ClientSideSearch">
          <input name="word"></input>
          <button type="submit"></button>
        </form>
      </div>
      <WordComponent word={props.data}>Test</WordComponent>
    </div>
  );
};
export default Page;
