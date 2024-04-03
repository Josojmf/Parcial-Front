import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { useState } from "preact/hooks";
import WordComponent from "../components/WordSSR.tsx";
import Axios from "npm:axios";
import Nav from "../components/Nav.tsx";
import { Word } from "../types.ts";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const wordToSearch = url.searchParams.get("word");
    if (wordToSearch == null || wordToSearch == "" || wordToSearch.length == 0 || !wordToSearch) {
      return ctx.render(undefined);
    }else{
    const APIurl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordToSearch}`;
    const response = await Axios.get(APIurl);
    const word = response.data.at(0) as Word;
    return ctx.render(word);
    }
  }
};
const Page = (props: PageProps<Word | undefined>) => {
  const word = props.data as Word;
  return (
    <div className="MainPage">
       <Nav />
       <h1 className="TitleSSR">Server Side</h1>
      <div className="ServerSideSearchContainer">
        <form action="/ServerSideSearch">
          <input className ="InputSSR" name="word"></input>
          <button type="submit" className="SSRInputButton">Search</button>
        </form>
      </div>
      <WordComponent word={props.data}></WordComponent>
    </div>
  );
};
export default Page;
