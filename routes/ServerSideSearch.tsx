import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { useState } from "preact/hooks";
import WordComponent from "../components/WordSSR.tsx";
import Axios from "npm:axios";
import Nav from "../components/Nav.tsx";
import InputForm from "../islands/InputForm.tsx";
import { Word } from "../types.ts";
export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const wordSearch = url.searchParams.get("word");
    const APIurl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordSearch}`;
    const response = await Axios.get(APIurl);
    if (response.data.length === 0) {
      return ctx.render(undefined);
    } else {
      const word = response.data.at(0) as Word;
      return ctx.render(word);
    }
  },
};
const Page = (props: PageProps<Word | undefined>) => {
  const word = props.data as Word;
  return (
    <div>
      <Nav />
      <h1 className="TitleSSR">My Dictionary</h1>
      <InputForm />
      <WordComponent word={word}></WordComponent>
    </div>
  );
};
export default Page;
