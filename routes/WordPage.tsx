import { FreshContext, Handlers,PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
type Word = {
    word: string;
    meanings: {
        partOfSpeech: string;
        definitions: {
        definition: string;
        }[];
    }[];
    };
export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext) => {
        const url = new URL(req.url);
        const wordToSearch = url.searchParams.get("word");
        if (wordToSearch == null || wordToSearch == "" || wordToSearch.length == 0 || !wordToSearch) {
            return ctx.render(undefined);
        } else {
            const APIurl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordToSearch}`;
            const response = await axios.get(APIurl);
            const word = response.data.at(0) as Word;
            return ctx.render(word);
        }
    }
};
const Page = (props: PageProps<Word | undefined>) => {
    return (
        <div>
            <h1>My Dictionary</h1>
            <form action="/WordPage">
                <input name="word"></input>
                <button type="submit">Search</button>
            </form>
            <div>
                {props.data?.meanings.map((meaning) => {
                    return (
                        <div>
                            <h2>{meaning.partOfSpeech}</h2>
                            {meaning.definitions.map((definition) => {
                                return <a href="/WordPage">{definition.definition}</a>;
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
