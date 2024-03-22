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

const Page = (props: PageProps<Word | undefined>) => {
  return (
    <div>
      <form action="/ServerSideSearch">
        <input name="word"></input>
        <button type="submit"></button>
      </form>
    </div>
  );
};
export default Page;
